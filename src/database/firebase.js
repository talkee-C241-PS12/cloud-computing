const { Firestore } = require('@google-cloud/firestore');

const database = new Firestore({
    databaseId: process.env.FIRESTOREID
  });

  module.exports = database;