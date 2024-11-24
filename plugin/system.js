const { cmd } = require('../command');

cmd(
    {
        pattern: "sysinfo",
        desc: "Display system information",
        category: "main",
    },
    async (conn, mek, m, { reply }) => {
        try {
            const systemInfo = `System Info:
- Node.js Version: ${process.version}
- OS: ${process.platform}
- Uptime: ${process.uptime()} seconds`;

            reply(systemInfo);
        } catch (e) {
            console.error('[SYSTEM COMMAND ERROR]', e);
            reply(`Error: ${e.message}`);
        }
    }
);
