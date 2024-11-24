const mongoose = require('mongoose');
const { config } = require('../config');
const { MongoClient } = require('mongodb');

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process if DB connection fails
  }
};

// Schema and Model example for storing session data or messages
const messageSchema = new mongoose.Schema({
  sender: String,
  receiver: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
});

const Message = mongoose.model('Message', messageSchema);

// Read environment variables from the database
const readEnv = async (key = '') => {
  try {
    const client = new MongoClient(config.MONGODB_URI);
    await client.connect();
    const db = client.db('whatsappBot');
    const configCollection = db.collection('config');
    const result = await configCollection.findOne({ key });
    client.close();
    return result || {};
  } catch (error) {
    console.error('Error reading from the database:', error);
    return {};
  }
};

// Save a message to the database
const saveMessage = async (message) => {
  try {
    const newMessage = new Message(message);
    await newMessage.save();
    console.log('Message saved to DB');
  } catch (error) {
    console.error('Error saving message to DB:', error);
  }
};

module.exports = { connectDB, readEnv, saveMessage };
