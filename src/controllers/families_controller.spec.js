/* eslint-disable no-unused-expressions */
/* eslint-disable node/no-unpublished-require */
const { expect } = require('chai');
const sinon = require('sinon');
const uuid = require('uuid/v4');

const familiesController = require('./families_controller');

const { Family } = require('../models');

describe('Controllers :: familiesController', () => {
  describe('#allFamilies', async () => {
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

      const createStub = sinon.stub(Family, 'findAll').returns(createReturnObject);

      // When
      const createdObject = await familiesController.filter(category);

      // Then
      expect(createStub.calledOnce).to.be.true;
      expect(createdObject).to.deep.equal(expectedObject);
      createStub.restore();
    });

    it('should return an array with object', async () => {
      const category = { ref: 'iphone' };

      // When
      const familyList = await familiesController.filter(category);

      // console.log(familyList);
      // Then
      expect(familyList).to.be.an('array');
      expect(familyList[0]).to.be.an('object');
    });
  });
});
