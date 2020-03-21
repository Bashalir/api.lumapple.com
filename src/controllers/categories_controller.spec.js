/* eslint-disable no-unused-expressions */
/* eslint-disable node/no-unpublished-require */
const { expect } = require('chai');
const sinon = require('sinon');
const uuid = require('uuid/v4');

const categoryController = require('./categories_controller');

const { Category } = require('../models');

describe('Controllers :: categoriesController', () => {
  describe('#idCategory', () => {
    it('should return the right object', async () => {
      // Given
      const id = uuid();

      const createReturnObject = {
        id,
      };

      const expectedObject = {
        id,
      };

      const createStub = sinon
        .stub(Category, 'findOne')
        .returns(createReturnObject);

      // When
      const createdObject = await categoryController.idCategory('iphone');

      // Then
      expect(createStub.calledOnce).to.be.true;
      expect(createdObject).to.deep.equal(expectedObject);
      createStub.restore();
    });
    it('should return a UUID', async () => {
      // Given

      // When
      const iphoneUUID = await categoryController.idCategory('iphone');

      // Then
      console.log(iphoneUUID.id);
      expect(iphoneUUID).to.be.an('object');
      expect(iphoneUUID.id).to.be.a('string');
      expect(iphoneUUID.id).to.have.lengthOf(36);
    });
    it('should return a error', async () => {
      // Given

      // When
      const iphoneUUID = await categoryController.idCategory('mahmoud');

      // Then
      console.log(iphoneUUID.id);
      expect(iphoneUUID).to.be.an('object');
      expect(iphoneUUID.id).to.be.a('string');
      expect(iphoneUUID.id).to.have.lengthOf(36);
    });
  });
});
