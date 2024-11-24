const { cmd } = require('../command');

cmd(
    {
        pattern: "restart",
        desc: "Restart the bot",
        category: "owner",
    },
    async (conn, mek, m, { reply }) => {
        try {
            reply('Bot is restarting...');
            process.exit(); // This will restart the bot by stopping it.
        } catch (e) {
            console.error('[RESTART COMMAND ERROR]', e);
            reply(`Error: ${e.message}`);
        }
    }
);
