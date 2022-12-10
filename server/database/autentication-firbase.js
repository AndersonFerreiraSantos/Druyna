const serviceAccount = require('./serviceAccountKey.json');
const autenticationFirebase = require('firebase-admin')

autenticationFirebase.initializeApp({
    credential: autenticationFirebase.credential.cert(serviceAccount)
  });
