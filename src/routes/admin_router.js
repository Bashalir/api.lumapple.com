const express = require('express');

const uploadImageToBuffer = require('../middlewares/upload_image_to_buffer');
const { uploader, cloudinaryConfig } = require('../config/cloudinary');
// const { addProduct } = require('../controllers/products_controller');
const convertBufferToString = require('../controllers/convert_buffer_to_string');

const router = express.Router();

router.use('*', cloudinaryConfig);

router.get('/', async (request, response) => {
  response.status(200).send('admin2');
});

const uploadOptions = (fileName, folder) => {
  return {
    public_id: `${fileName}`,
    folder: `${folder}`,
    use_filename: true,
    unique_filename: false,
    format: 'webp',
  };
};

router.post('/upload', uploadImageToBuffer, async (request, response) => {
  if (request.file) {
    const imageBlob = convertBufferToString(request).content;
    return uploader
      .upload(imageBlob, uploadOptions('logo', 'families'))
      .then((result) => {
        const imageUrl = result.url;
        console.log('result');
        return response.status(200).json({
          message: 'Your image has been uploded successfully to cloudinary',
          data: { imageUrl },
        });
      })
      .catch((err) =>
        response.status(400).json({
          messge: 'someting went wrong while processing your request',
          data: { err },
        }),
      );
  }
  return response.status(500).send('no file');
});

// router.post('/products', async (request, response) => {
//   const data = request.body;
//   const newProduct = await addProduct(data);

//   response.status(201);
//   response.json(newProduct);
// });

module.exports = router;
