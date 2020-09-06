// Import Firebase Admin initialized instance to middleware
const admin = require('../config/firebase.js');

const firebaseAuthMiddleware = {
  decodeFirebaseIdToken: (req, res, next) => {
    const idToken = req.headers.authorization;

    if (!idToken) {
      return res.status(400).json({
        error: {
          message: "Vous n'etes pas identifié."
        }
      });
    }

    // idToken comes from the client app
    admin
      .auth()
      .verifyIdToken(idToken)
      .then(function(decodedToken) {
        if (decodedToken) {
          req.body.data.firebaseId = decodedToken.user_id;
          return next();
        }
        return next();
      })
      .catch(function(error) {
        console.log(error);
        return res.status(401).json({ err: "Vous n'etes pas autorisé." });
      });
  },
  // Checks if a user is authenticated from firebase admin
  isAuthorized: async (req, res, next) => {
    if (req.user) {
      return next();
    }
    return res.status(401).json({
      error: {
        message: 'You are not authorised to perform this action. SignUp/Login to continue'
      }
    });
  }

  // Checks if a user has the required permission from token claims stored in firebase admin for the user
  // hasAdminRole: async (req, res, next) => {
  //   try {
  //     const roleRequest = await firebase
  //       .database()
  //       .ref('roles')
  //       .once('value');
  //     const rolesPayload = roleRequest.val();
  //     const role = rolesPayload.find(role => role.id === roleRanks.admin);

  //     if (req.user.roleId <= role.id) {
  //       return next();
  //     }
  //     return res.status(403).json({
  //       error: {
  //         message: 'You are not permitted to access this resource'
  //       }
  //     });
  //   } catch (error) {
  //     return res.status(500).json({
  //       error: {
  //         message: 'An error occurred while getting user access. Please try again'
  //       }
  //     });
  //   }
  // }
};

module.exports = firebaseAuthMiddleware;
