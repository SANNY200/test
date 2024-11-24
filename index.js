const { WAConnection, MessageType } = require('@whiskeysockets/baileys');
const fs = require('fs');
const config = require('./config');  // Import the config file

async function startBot() {
  const conn = new WAConnection();

  // Load session if it exists
  const sessionFile = `${config.SESSION_FILE_PATH}/${config.SESSION_ID}.json`;
  if (fs.existsSync(sessionFile)) {
    conn.loadAuthInfo(sessionFile); // Load session from file
  }

  // Connect and authenticate
  conn.on('open', () => {
    console.log('Bot is connected and authenticated!');
    // Save session info to prevent re-authentication
    fs.writeFileSync(sessionFile, JSON.stringify(conn.base64EncodedAuthInfo()));
  });

  // Authenticate and login
  await conn.connect();

  // Set bot's number
  conn.user.jid = config.BOT_NUMBER;

  console.log(`Bot number: ${config.BOT_NUMBER} is now connected.`);
}

startBot().catch(err => console.error(err));
