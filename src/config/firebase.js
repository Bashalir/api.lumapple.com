require('dotenv').config();
const admin = require('firebase-admin');
// eslint-disable-next-line node/no-unpublished-require
const serviceAccount = require('../../firebase_admin.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL
});

module.exports = admin;
