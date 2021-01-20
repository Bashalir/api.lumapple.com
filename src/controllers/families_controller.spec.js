/* eslint-disable no-unused-expressions */
/* eslint-disable node/no-unpublished-require */
const uuid = require('uuid/v4');
const expect = require('expect');

const familiesController = require('./families_controller');

const { Family } = require('../models');

describe('Controllers :: familiesController', () => {
  describe('#allFamilies', () => {
    it('should return the right object', async () => {
      // Given
      const category = { ref: 'iphone' };
      const id = uuid();
      const expectedObject = [
        {
          id,
          type: 'iPhone 11 Pro Max',
          ref: 'iphone11_pro_max',
          display_size: 6.5
        },
        { type: 'iPhone 11 Pro', ref: 'iphone11_pro', display_size: 5.8 },
        { type: 'iPhone 11', ref: 'iphone11', display_size: 6.1 },
        { type: 'iPhone XR', ref: 'iphoneXR', display_size: 6.1 },
        { type: 'iPhone 8 Plus', ref: 'iphone8_plus', display_size: 5.5 },
        { type: 'iPhone 8', ref: 'iphone8', display_size: 4.7 }
      ];

      const createReturnObject = [...expectedObject];

      // eslint-disable-next-line no-undef
      const createStub = jest.spyOn(Family, 'findAll').mockImplementation(() => createReturnObject);

      // When
      const createdObject = await familiesController.filter(category);

      // Then
      expect(createStub).toHaveBeenCalled();
      expect(createdObject).toEqual(expectedObject);
    });
  });
});
