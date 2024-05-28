const createDatabase = require('./ws_dbinit_mongodb');
const connection = require('./ws_connect_mongodb');
const {ObjectId} = require("mongodb");

let create;
let client;

async function connectToMongoDB() {
    try {
        create = await createDatabase;
        client = connection;
        console.log("Wait for the creation");
        console.log("Connected to MongoDB");
        return client.db('testWebServices');
    } catch (err) {
        console.error("Error connecting to mongoDB", err);
        throw err;
    }
}

async function insertDocument(collectionName, document) {
    const database = await connectToMongoDB();
    const collection = database.collection(collectionName);
    
    try {
        const result = await collection.insertOne(document);
        console.log(`${result.insertedCount} document inserted into ${collectionName}`);
        return result.insertedId;
    } catch (err) {
        console.error("Error inserting document : " + document, err);
    }
}

async function findDocuments(collectionName, query = {}) {
    const database = await connectToMongoDB();
    const collection = database.collection(collectionName);
    
    try {
        const documents = await collection.find(query).toArray();
        console.log(`Found ${documents.length} documents in ${collectionName}`);
        return documents;
    } catch (err) {
        console.error('Error finding document : ', err)
    }
}

async function updateDocument(collectionName, filter, update) {
    const database = await connectToMongoDB();
    const collection = database.collection(collectionName);

    try {
        const result = await collection.updateOne(filter, { $set: update });
        console.log(`${result.modifiedCount} document updated in ${collectionName}`);
        return result.modifiedCount;
    } catch (err) {
        console.error("Error updating document:", err);
    }
}

async function deleteDocument(collectionName, filter) {
    const database = await connectToMongoDB();
    const collection = database.collection(collectionName);

    try {
        const result = await collection.deleteOne(filter);
        console.log(`${result.deletedCount} document deleted from ${collectionName}`);
        return result.deletedCount;
    } catch (error) {
        console.error("Error deleting document:", error);
    }
}

// Tests :
(async () => {
    await connectToMongoDB();
    // Insert a document
    const insertedId = await insertDocument('ws_masks', { name: 'John', age: 30 });

    // Find documents
    const documents = await findDocuments('ws_masks');
    console.log("Found documents:", documents);
/*
    // Update a document
    const result = await updateDocument('ws_masks', { _id: ObjectId(insertedId) }, { age: 35 });

    // Delete a document
    const deleteResult = await deleteDocument('ws_masks', { _id: ObjectId(insertedId)   });

*/
})();