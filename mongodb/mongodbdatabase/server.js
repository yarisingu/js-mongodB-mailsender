const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://mongo:4yuC0tEOO7lyOXJRIVcI@containers-us-west-82.railway.app:6642';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB server
client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  // Perform database operations here
  const db = client.db();

  // Insert a document
  const collection = db.collection('users');
  const document = { name: 'John Doe', age: 30 };
  collection.insertOne(document, (error, result) => {
    if (error) {
      console.error('Error inserting document:', error);
      return;
    }
    console.log('Document inserted:', result.insertedId);
    // Other database operations...
  });

  // Close the connection
  client.close();
});
