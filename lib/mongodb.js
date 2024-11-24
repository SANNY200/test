const { MongoClient } = require('mongodb');
const { readEnv } = require('./mongodbenv');

const connectToDatabase = async () => {
    const uri = readEnv('MONGO_URI');
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db();
};

module.exports = { connectToDatabase };
