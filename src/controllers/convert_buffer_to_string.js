const Datauri = require('datauri');
const path = require('path');

const dUri = new Datauri();

module.exports = req =>
  dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);
