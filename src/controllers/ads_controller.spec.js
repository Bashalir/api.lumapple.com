/* eslint-disable no-unused-expressions */
/* eslint-disable node/no-unpublished-require */
const { expect } = require('chai');
const sinon = require('sinon');
const uuid = require('uuid/v4');

const adsController = require('./ads_controller');

const { Ad } = require('../models');

describe('Controllers :: adsController', () => {
  describe('#postAd', () => {
    it('should return an object with confirmation of receipt ', async () => {
      // Given
      const familyId = uuid();
      const colorId = uuid();
      const processorId = uuid();
      const storageId = uuid();
      const optionId = uuid();
      const adId = uuid();

      const adData = {
        family_id: familyId,
        color_id: colorId,
        processor_id: processorId,
        storage_id: storageId,
        option_id: optionId,
        price: 299
      };

      const createReturnObject = {
        status: 'created',
        ad_id: adId
      };

      const expectedObject = {
        status: 'created',
        ad_id: adId
      };

      const createStub = sinon.stub(Ad, 'create').returns(createReturnObject);

      // When
      const createdObject = await adsController.postAd(adData);

      // Then
      expect(createStub.calledOnce).to.be.true;
      expect(createdObject.status).to.deep.equal(expectedObject.status);
      createStub.restore();
    });
  });
});
