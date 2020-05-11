/* eslint-disable no-unused-expressions */
/* eslint-disable node/no-unpublished-require */
const { expect } = require('chai');

const { Ad } = require('../models');
const adsController = require('./ads_controller');

describe('Controllers :: adsController', () => {
  describe('#addAd', () => {
    it('should return send confirmation', async () => {
      // Given
      const adForm = {
        family_id: 'iphone11',
        color_id: '',
      };

      // When
      const storageList = await storagesController.filter(family);

      console.log('storageList', storageList);
      // Then
      expect(storageList).to.be.an('array');
    });
  });
});
