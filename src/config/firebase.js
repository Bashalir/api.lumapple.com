require('dotenv').config();
const firebase = require('firebase-admin');
// eslint-disable-next-line node/no-unpublished-require
const serviceAccount = require('../../firebase-admin.json');

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL
});
