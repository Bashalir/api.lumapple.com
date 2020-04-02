/* eslint-disable no-unused-expressions */
/* eslint-disable node/no-unpublished-require */
const { expect } = require('chai');
const sinon = require('sinon');
const uuid = require('uuid/v4');

const colorsController = require('./colors_controller');

const { Color } = require('../models');

describe('Controllers :: colorsController', () => {
  describe('#allColors', async () => {
    it('should return the right object', async () => {
      // Given
      const family = { ref: 'iphone11' };

      const expectedObject = [
        {
          type: 'iPhone 11 Pro Max',
          ref: 'iphone11_pro_max',
          display_size: 6.5,
        },
        { type: 'iPhone 11 Pro', ref: 'iphone11_pro', display_size: 5.8 },
        { type: 'iPhone 11', ref: 'iphone11', display_size: 6.1 },
        { type: 'iPhone XR', ref: 'iphoneXR', display_size: 6.1 },
        { type: 'iPhone 8 Plus', ref: 'iphone8_plus', display_size: 5.5 },
        { type: 'iPhone 8', ref: 'iphone8', display_size: 4.7 },
      ];

      const createReturnObject = [...expectedObject];

      const createStub = sinon
        .stub(Color, 'findAll')
        .returns(createReturnObject);

      // When
      const createdObject = await colorsController.filter(family);

      // Then
      expect(createStub.calledOnce).to.be.true;
      expect(createdObject).to.deep.equal(expectedObject);
      createStub.restore();
    });

    it('should return an array with object', async () => {
      const family = { ref: 'iphone11' };

      // When
      const colorListRaw = await colorsController.filter(family);

      const colorList = colorListRaw.map((colorRaw) => {
        return colorRaw.dataValues;
      });
      // Then

      console.log(colorList);

      expect(colorList).to.be.an('array');
      expect(colorList[0]).to.be.an('object');
    });
  });
});
