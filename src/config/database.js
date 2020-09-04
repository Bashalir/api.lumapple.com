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
    use_env_variable: process.env.DATABASE_URL,
    define: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
    dialect: 'postgres'
  }
};
