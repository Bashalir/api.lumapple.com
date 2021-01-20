/* eslint-disable no-unused-expressions */
/* eslint-disable node/no-unpublished-require */
const uuid = require('uuid/v4');
const jest = require('jest');
const expect = require('expect');

const categoriesController = require('./categories_controller');

const { Category } = require('../models');

describe('Controllers :: categoriesController', () => {
  describe('#idCategory', () => {
    it('should return the object of category "iphone" ', async () => {
      // Given
      const id = uuid();

      const createReturnObject = {
        id
      };

      const expectedObject = {
        id
      };

      const createStub = jest
        .spyOn(Category, 'findOne')
        .mockImplementation(() => createReturnObject);

      // When
      const createdObject = await categoriesController.idCategory('iphone');

      // Then
      expect(createStub).toBeCalled();
      expect(createdObject).toEqual(expectedObject);
    });
  });

  describe('#allCategories', () => {
    it('should return the object of all categories" ', async () => {
      // Given
      const id = uuid();

      const createReturnObject = {
        id
      };

      const expectedObject = {
        id
      };

      const createStub = jest
        .spyOn(Category, 'findAll')
        .mockImplementation(() => createReturnObject);

      // When
      const createdObject = await categoriesController.allCategories();

      // Then
      expect(createStub.calledOnce).toBeTruthy;
      expect(createdObject).toEqual(expectedObject);
    });
  });
});
