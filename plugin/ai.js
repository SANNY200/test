const { cmd } = require('../command');
const { formatText } = require('../lib/function');

cmd(
    {
        pattern: "ai",
        desc: "AI-based functionality",
        category: "main",
    },
    async (conn, mek, m, { reply, body }) => {
        try {
            const formattedInput = formatText(body);
            reply(`AI Response: ${formattedInput}`);
        } catch (e) {
            console.error('[AI COMMAND ERROR]', e);
            reply(`Error: ${e.message}`);
        }
    }
);
