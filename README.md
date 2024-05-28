# wsYnov

Groupe : *Alexandre Piron*, *Jeremy Bilger*, *Nathan Piraux*, *Evan Lefevre*

## Étapes

### Aiven et BDD:
- Créer un compte Aiven et configurer les bases de données :
  - PostGreSQL
  - MongoDB
  - MySQL

### Connexion BDD
Nous avons utilisés les informations de connexion fournis par Aiven pour nous connecter à la BDD.
Nous avons séparé l'initialisation et la connexion en deux fichiers distincts : 
- ws_dbinit_[BDD]
- ws_connect_[BDD]

### Initialiser les tables
Dans le fichier `ws_dbinit_[BDD]`, nous avions besoin de créer plusieurs tables / collections, prenons l'exemple de MongoDB :
- ws_masks (id, name, description, mask_json)
```js
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
```
- ws_entries (id, id_mask, entry_json)
```js
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
```

### Effectuer des opérations CRUD :

Les opérations CruD se décomposent en 4 requêtes différentes :
- CREATE
- READ
- UPDATE
- DELETE

Prenons l'exemple de MongoDB :
- Create
````js
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
````
- Read
````js
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
````
- Update
````js
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
````
- Delete 
````js
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
````