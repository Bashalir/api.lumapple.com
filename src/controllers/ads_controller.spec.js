/* eslint-disable */
/* eslint-disable no-unused-expressions */
/* eslint-disable node/no-unpublished-require */
const uuid = require('uuid/v4');

const adsController = require('./ads_controller');

const { Ad, User } = require('../models');

describe('Controllers :: adsController', () => {
  describe('#postAd', () => {
    it('should return an object with confirmation of receipt ', async () => {
      // Given
      const familyId = uuid();
      const colorId = uuid();
      const storageId = uuid();
      const hullStateId = uuid();
      const screenStateId = uuid();
      const firebaseId = uuid();
      const adId = uuid();

      const adData = {
        family_id: familyId,
        color_id: colorId,
        storage_id: storageId,
        hull_state_id: hullStateId,
        screen_state_id: screenStateId,
        price: 299,
        data: {
          firebaseId
        }

      };

      const createReturnObject = {
        status: 'created',
        ad_id: adId
      };

      const expectedObject = {
        status: 'created',
        ad_id: adId
      };

      const createStubUser = jest.spyOn(User, 'findAll').mockImplementation(() => ['456646', 'bash@bash.Fr']);
      const createStub = jest.spyOn(Ad, 'create').mockImplementation(() => createReturnObject);

      // When
      const createdObject = await adsController.postAd(adData);

      // Then
      expect(createStub).toHaveBeenCalled();
      expect(createdObject.status).toEqual(expectedObject.status);
    });
  });
});
