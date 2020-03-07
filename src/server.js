const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const https = require('https');
const fs = require('fs');

const key = fs.readFileSync('./localhost-key.pem');
const cert = fs.readFileSync('./localhost.pem');

// const { notFoundHandler, errorLogger, errorHandler } = require('./middlewares');
const routes = require('./routes');

const server = https.createServer({ key, cert }, express());

server.use(helmet());
server.use(logger('tiny'));
server.use(bodyParser.json());
server.use('/api', cors());

server.use('/api', routes);

// server.use(notFoundHandler);
// server.use(errorLogger);
// server.use(errorHandler);

module.exports = server;
