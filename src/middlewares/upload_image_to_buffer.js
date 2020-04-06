const multer = require('multer');

const storage = multer.memoryStorage();

// the name of the field to upload file is 'image'
module.exports = multer({ storage }).single('image');
