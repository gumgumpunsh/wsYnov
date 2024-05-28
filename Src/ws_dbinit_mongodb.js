const connection = require('./ws_connect_mongodb');

async function createDatabaseAndCollection() {
    let client;
    try {
        client = await connection;

        // Specify the database
        const database = client.db('testWebServices');
        //console.log(client.db('testWebServices'));
        console.log("Connected to the database -testWebServices-");

        const collections = await database.listCollections().toArray();

        // Create the ws_masks collection
        try {
            if (collections.find(col => col.name === 'ws_masks')) {
                console.log("Collection ws_masks already exists !");
            } else {
                // Specify the collection
                await database.createCollection('ws_masks');
                console.log("Created the ws_masks table");
            }
        } catch (err) {
            console.log("Error when creating table -ws_masks- : ", err);
        }

        // Create the ws_entries collection
        try {
            if (collections.find(col => col.name === 'ws_entries')) {
                console.log("Collection ws_entries already exists !");
            } else {
                // Specify the collection
                await database.createCollection('ws_entries');
                console.log("Created the ws_entries table");
            }
        }  catch (err) {
            console.log("Error when creating table -ws_entries- : ", err);
        }

    } catch (err) {
        console.log('Error : ' + err);
    } finally {
        // Close the connection when done
        if (client) {
            await client.close();
            console.log("Connection closed");
        }
    }
}

// Call the function to create the database and the collections
module.exports = createDatabaseAndCollection();