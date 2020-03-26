/* eslint-disable no-unused-expressions */
/* eslint-disable node/no-unpublished-require */
const { expect } = require('chai');
const sinon = require('sinon');
const uuid = require('uuid/v4');

const { Storage } = require('../models');
const storagesController = require('./storages_controller');

describe('Controllers :: storageController', () => {
  describe('#getStoragesByCategory', () => {
    // it('should return the right object', async () => {
    //   // Given
    //   const category = 'iPhone';
    //   const iphoneStorageList = [
    //     { id: '6d62799b-0374-441e-a083-ce426846cf09', capacity: 64 },
    //     { id: '3cdd6954-752e-4c70-a6ee-fe0263d79427', capacity: 128 },
    //     { id: 'bbd739d1-3dd3-4518-9709-fa5354e3ffe7', capacity: 256 },
    //     { id: '76913f1a-0795-4b5a-9b7d-9847f6383177', capacity: 512 },
    //   ];
    //   // When
    //   const createReturnObject = {
    //     ...iphoneStorageList,
    //   };

    //   const expectedObject = {
    //     ...iphoneStorageList,
    //   };

    //   const createStub = sinon
    //     .stub(Storage, 'findAll')
    //     .returns(createReturnObject);

    //   // When
    //   const createdObject = await storagesController.filter(category);

    //   // Then
    //   expect(createStub.calledOnce).to.be.true;
    //   expect(createdObject).to.deep.equal(expectedObject);
    // });
    it('should return the list', async () => {
      // Given
      const category = { ref: 'iphone' };

      // When
      const storageList = await storagesController.filter(category);

      console.log(storageList);
      // Then
      expect(storageList).to.be.an('array');
    });

    it('should return an Array with just the capacities number', async () => {
      // Given
      const category = { ref: 'iphone' };
      const capacity = await storagesController.filter(category);
      // When
      const capacityList = await storagesController.arrayObjectToArray(
        capacity,
      );

      console.log(capacityList);
      // Then
      expect(capacityList).to.be.an('array');
      expect(capacityList[0]).to.be.an('number');
    });
  });
});
