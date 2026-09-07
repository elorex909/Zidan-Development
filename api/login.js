const { verifyCredentials } = require('../lib/auth');

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ ok: false, error: 'METHOD_NOT_ALLOWED' });
    }

    const { username, password } = req.body || {};
    if (!username || !password) {
        return res.status(400).json({ ok: false, error: 'MISSING_FIELDS' });
    }

    try {
        const ok = await verifyCredentials(String(username).trim(), String(password));
        return res.status(200).json({ ok });
    } catch (err) {
        if (err && err.message === 'STORAGE_NOT_CONFIGURED') {
            // Storage isn't connected on Vercel yet — tell the client so it can
            // fall back to the old local check instead of hard-failing login.
            return res.status(503).json({ ok: false, error: 'STORAGE_NOT_CONFIGURED' });
        }
        console.error('login error', err);
        return res.status(500).json({ ok: false, error: 'SERVER_ERROR' });
    }
};
