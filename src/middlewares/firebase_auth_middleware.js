// Import Firebase Admin initialized instance to middleware
const firebase = require('../config/firebase.js');

// const roleRanks = {
//   superAdmin: 1,
//   admin: 2,
//   user: 3
// };

const firebaseAuthMiddleware = {
  decodeFirebaseIdToken: async (req, res, next) => {
    if (!req.headers.id_token) {
      return res.status(400).json({
        error: {
          message: 'You did not specify any idToken for this request'
        }
      });
    }

    try {
      // Use firebase-admin auth to verify the token passed in from the client header.
      // This is token is generated from the firebase client
      // Decoding this token returns the userpayload and all the other token claims you added while creating the custom token
      const userPayload = await firebase.auth().verifyIdToken(req.headers.id_token);

      req.user = userPayload;

      return next();
    } catch (error) {
      return res.status(500).json({
        error
      });
    }
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
