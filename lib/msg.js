const { getContentType } = require('@whiskeysockets/baileys');
const { saveMessage } = require('./lib/database');
const { config } = require('../config');

// Function to handle incoming messages
const sms = async (conn, mek) => {
  try {
    const type = getContentType(mek.message);
    const from = mek.key.remoteJid;
    const body = (type === 'conversation') ? mek.message.conversation :
                 (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : 
                 (type === 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : 
                 (type === 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : '';

    const message = {
      sender: mek.key.fromMe ? 'bot' : from,
      receiver: from,
      message: body,
    };

    // Save the message to the database
    await saveMessage(message);

    return { from, body, type, message };
  } catch (error) {
    console.error('Error handling message:', error);
    return { error: 'Error processing message' };
  }
};

module.exports = { sms };
