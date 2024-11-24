const { cmd } = require('../command');
const { readEnv } = require('../lib/mongodbenv');

cmd(
    {
        pattern: "updateenv",
        desc: "Update environment variables",
        category: "owner",
    },
    async (conn, mek, m, { reply, args }) => {
        try {
            const key = args[0];
            const value = args[1];

            if (!key || !value) {
                return reply('Please provide a key and value to update.');
            }

            process.env[key] = value;
            reply(`Environment variable updated: ${key} = ${value}`);
        } catch (e) {
            console.error('[UPDATE ENV COMMAND ERROR]', e);
            reply(`Error: ${e.message}`);
        }
    }
);
