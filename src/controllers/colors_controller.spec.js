/* eslint-disable no-unused-expressions */
/* eslint-disable node/no-unpublished-require */
const { expect } = require('chai');
const sinon = require('sinon');

const colorsController = require('./colors_controller');

const { Color } = require('../models');

describe('Controllers :: colorsController', () => {
  describe('#allColors', () => {
    it('should return the list of all colors for the family iphone 11', async () => {
      // Given
      const family = { ref: 'iphone11' };

      const expectedObject = [
        { ref: 'p_white', name_fr: 'Blanc', rgb: '#f9f6ef' },
        { ref: 'p_yellow', name_fr: 'Jaune', rgb: '#ffe681' },
        { ref: 'purple', name_fr: 'Mauve', rgb: '#d1cdda' },
        { ref: 'black', name_fr: 'Noir', rgb: '#1f2020' },
        { ref: 'product_red', name_fr: 'Rouge', rgb: '#ba0c2e' },
        { ref: 'p_green', name_fr: 'Vert', rgb: '#aee1cd' }
      ];
      const createReturnObject = [...expectedObject];

      const createStub = sinon.stub(Color, 'findAll').returns(createReturnObject);

      // When
      const createdObject = await colorsController.filter(family);

      // Then
      expect(createStub.calledOnce).to.be.true;
      expect(createdObject).to.deep.equal(expectedObject);
      createStub.restore();
    });
  });
});
