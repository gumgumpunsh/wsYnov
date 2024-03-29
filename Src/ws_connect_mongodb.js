const {MongoClient} = require('mongodb');

// Connection URI
const uri = "mongodb+srv://bilgerjeremy5705:b8209ze6531@cluster0.icxtwoq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function connectToMongoDB() {
    try {
        // Connect to the mongoDB cluster
        await client.connect();
        console.log("Connected to the cluster");
        return client;
    } catch (err) {
        console.log("Error connecting to mongoDB cluster", err)
    }
}

// Call the function to connect
module.exports = connectToMongoDB()