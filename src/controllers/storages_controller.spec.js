/* eslint-disable no-unused-expressions */
/* eslint-disable node/no-unpublished-require */
const { expect } = require('chai');

const storagesController = require('./storages_controller');

describe('Controllers :: storageController', () => {
  describe('#getStoragesByCategory', () => {
    it('should return the list', async () => {
      // Given
      const family = { ref: 'iphone11' };

      // When
      const storageList = await storagesController.filter(family);

      // Then
      expect(storageList).to.be.an('array');
    });
  });
});
