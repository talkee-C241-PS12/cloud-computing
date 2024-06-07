const { Firestore } = require('@google-cloud/firestore');

const database = new Firestore({
    databaseId: process.env.Firestore
  });

  module.exports = database;