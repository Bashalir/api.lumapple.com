const uuid = require('uuid/v4');
const { Product } = require('../models');

const productsController = {
  addProduct: async data => {
    const newProduct = { id: uuid(), ...data };

    const product = await Product.create(newProduct);
    return product;
  }
};

module.exports = productsController;
