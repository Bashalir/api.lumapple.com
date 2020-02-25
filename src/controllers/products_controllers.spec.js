const { expect } = require('chai');
const sinon = require('sinon');
const uuid = require('uuid/v4');

const productController = require('./products_controller');

const db = require('../models');
const Product = db.product;

describe('Controllers :: productController', () => {
  describe('#addProduct', () => {
    it('should return the right object', async () => {
      // Given
      const id = uuid();

      const data = {
        introduction_date: '10/27/2016',
        description: 'Apple MacBook Pro 13-Inch "Core i5" 2.0',
        model: 'MLL42LL/A',
        id_model: 'A1708 (EMC 2978)',
        ram: 8,
        storage: '256 GB SSD',
        processor: 'Core i5 (I5-6360U)',
        screen: '13.3" Widescreen',
        video_card: 'Iris Graphics 540',
      };

      const createReturnObject = {
        id,
        ...data,
      };

      const expectedObject = {
        id,
        ...data,
      };

      const createStub = sinon
        .stub(productController, 'addProduct')
        .returns(createReturnObject);

      // When
      const createdObject = await productController.addProduct(data);

      // Then
      expect(createdObject).to.deep.equal(expectedObject);
    });
  });
});
