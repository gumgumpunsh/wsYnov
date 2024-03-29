const connection = require('./ws_connect_mongodb');

async function createDatabaseAndCollection() {
    let client;
    try {
        client = await connection;

        // Specify the database
        const database = client.db('testWebServices');
        console.log("Connected to the database -testWebServices-");

        try {
            // Specify the collection
            const ws_masks = database.collection('ws_masks');
            console.log("Created the ws_masks table");
        } catch (err) {
            console.log("Error when creating table -ws_masks- : ", err);
        }

        try {
            const ws_entries = database.collection('ws_entries');
            console.log("Created the ws_entries table");
        }  catch (err) {
            console.log("Error when creating table -ws_entries- : ", err);
        }

        //console.log(`${ws_masks.insertedCount} documents inserted in ws_masks`);

        //console.log(`${ws_entries.insertedCount} documents inserted in ws_entries`);

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