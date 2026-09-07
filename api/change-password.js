const { verifyCredentials, setCredentials } = require('../lib/auth');

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ ok: false, error: 'METHOD_NOT_ALLOWED' });
    }

    const { currentUsername, currentPassword, newUsername, newPassword } = req.body || {};
    if (!currentUsername || !currentPassword || !newUsername || !newPassword) {
        return res.status(400).json({ ok: false, error: 'MISSING_FIELDS' });
    }
    if (String(newPassword).length < 6) {
        return res.status(400).json({ ok: false, error: 'PASSWORD_TOO_SHORT' });
    }

    try {
        const currentOk = await verifyCredentials(String(currentUsername).trim(), String(currentPassword));
        if (!currentOk) {
            return res.status(401).json({ ok: false, error: 'CURRENT_PASSWORD_INCORRECT' });
        }
        await setCredentials(String(newUsername).trim(), String(newPassword));
        return res.status(200).json({ ok: true });
    } catch (err) {
        if (err && err.message === 'STORAGE_NOT_CONFIGURED') {
            return res.status(503).json({ ok: false, error: 'STORAGE_NOT_CONFIGURED' });
        }
        console.error('change-password error', err);
        return res.status(500).json({ ok: false, error: 'SERVER_ERROR' });
    }
};
