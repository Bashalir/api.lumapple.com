/* eslint-disable no-unused-expressions */
/* eslint-disable node/no-unpublished-require */
const expect = require('expect');

const { Storage } = require('../models');
const storagesController = require('./storages_controller');

describe('Controllers :: storageController', () => {
  describe('#getStoragesByCategory', () => {
    it('should return the list', async () => {
      // Given
      const storageListExpected = [
        { id: 'f6a94cfa-6656-4fb6-bf87-e8ed937783f2', capacity: 64 },
        { id: '58fc8cc2-d3ec-452a-891a-d695f6f7a7d0', capacity: 128 },
        { id: 'a3d6d5ea-0cf1-4041-bc62-036aae71a7d0', capacity: 256 }
      ];

      const family = { ref: 'iphone11' };
      // eslint-disable-next-line no-undef
      jest.spyOn(Storage, 'findAll').mockImplementation(() => storageListExpected);
      // When
      const storageList = await storagesController.filter(family);

      // Then
      expect(storageList).toEqual(storageListExpected);
    });
  });
});
