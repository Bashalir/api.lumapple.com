const admin = require('firebase-admin');

async function verifyToken(req, res, next) {
  const idToken = req.headers.authorization;

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    if (decodedToken) {
      console.log('decodedToken', decodedToken.uid);
      req.body = {};
      console.log('req.body', req.body);
      req.body.uid = decodedToken.uid;

      return next();
    }
    return res.status(401).send('Not authorized');
  } catch (e) {
    console.log('error', e);
    return res.status(401).send('Not authorized');
  }
}

module.exports = verifyToken;
