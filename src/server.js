const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// const { notFoundHandler, errorLogger, errorHandler } = require('./middlewares');
const routes = require('./routes');
// const { cloudinaryConfig } = require('./config/cloudinary');

const server = express();

server.use(helmet());
server.use(logger('tiny'));
server.use(bodyParser.json());
server.use('/api', cors());
// server.use('*', cloudinaryConfig);
server.use('/api', routes);

// server.use(notFoundHandler);
// server.use(errorLogger);
// server.use(errorHandler);

module.exports = server;
