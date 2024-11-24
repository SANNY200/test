const { cmd } = require('../command');

cmd(
    {
        pattern: "alive",
        desc: "Check if the bot is alive",
        category: "main",
    },
    async (conn, mek, m, { reply }) => {
        try {
            reply('Bot is alive and running! 🤖');
        } catch (e) {
            console.error('[ALIVE COMMAND ERROR]', e);
            reply(`Error: ${e.message}`);
        }
    }
);
