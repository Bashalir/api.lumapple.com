const firebaseAuthMiddleware = require('../middlewares/firebase_auth_middleware');

require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    define: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
    quoteIdentifiers: false
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    define: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
    quoteIdentifiers: false
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: 25060,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      },
      ca: '../../ca-certificate.crt'
    },
    dialect: 'postgres',
    define: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
    quoteIdentifiers: false
  }
};
