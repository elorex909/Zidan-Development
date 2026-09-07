// Shared server-side auth helpers.
//
// This file lives OUTSIDE /api on purpose: Vercel turns every file directly
// under /api into its own public endpoint, so a shared helper has to sit
// somewhere else (here) and get imported by the actual endpoints
// (/api/login.js, /api/change-password.js) instead of becoming a route
// itself.
//
// Storage: one single Redis key ("zidan_auth") holds the current
// { username, passwordHash } as JSON. Until the very first successful
// password change, that key doesn't exist yet — in that case we fall back
// to the same default admin/password the site always shipped with, so the
// very first login (before anyone has ever used the new "الأمان" panel)
// still works everywhere.

const { Redis } = require('@upstash/redis');
const bcrypt = require('bcryptjs');

const AUTH_KEY = 'zidan_auth';
const DEFAULT_USERNAME = 'admin';
const DEFAULT_PASSWORD = 'Zidan@2026#Developments';

function getRedis() {
    const url = process.env.KV_REST_API_URL;
    const token = process.env.KV_REST_API_TOKEN;
    if (!url || !token) {
        // Storage isn't connected to this Vercel project yet. Thrown so the
        // route handlers can return a clear, specific error instead of a
        // generic 500.
        throw new Error('STORAGE_NOT_CONFIGURED');
    }
    return new Redis({ url, token });
}

async function getCurrentAuth() {
    const redis = getRedis();
    const stored = await redis.get(AUTH_KEY);
    if (stored && stored.username && stored.passwordHash) {
        return { username: stored.username, passwordHash: stored.passwordHash, isDefault: false };
    }
    return { username: DEFAULT_USERNAME, passwordHash: null, isDefault: true };
}

async function verifyCredentials(username, password) {
    const current = await getCurrentAuth();
    if (current.isDefault) {
        return username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD;
    }
    if (username !== current.username) return false;
    return bcrypt.compare(password, current.passwordHash);
}

async function setCredentials(username, password) {
    const redis = getRedis();
    const passwordHash = await bcrypt.hash(password, 10);
    await redis.set(AUTH_KEY, { username, passwordHash });
}

module.exports = { getCurrentAuth, verifyCredentials, setCredentials, DEFAULT_USERNAME, DEFAULT_PASSWORD };
