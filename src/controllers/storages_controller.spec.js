/* eslint-disable no-unused-expressions */
/* eslint-disable node/no-unpublished-require */
const { expect } = require('chai');
const sinon = require('sinon');
const uuid = require('uuid/v4');

const { Storage } = require('../models');
const storagesController = require('./storages_controller');

describe('Controllers :: storageController', () => {
  describe('#getStoragesByCategory', () => {
    it('should return the list', async () => {
      // Given
      const family = { ref: 'iphone11' };

      // When
      const storageList = await storagesController.filter(family);

      console.log('storageList', storageList);
      // Then
      expect(storageList).to.be.an('array');
    });
  });
});
