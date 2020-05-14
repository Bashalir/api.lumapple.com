/* eslint-disable */
// eslint-disable-next-line node/no-unpublished-require
// const { expect } = require('chai');

// eslint-disable-next-line node/no-unpublished-require
const request = require('supertest');
const uuid = require('uuid/v4');
const app = require('../server');

describe('Routes :: ads.js', () => {
  it('should return status created ', done => {
    const familyId = uuid();
    const colorId = uuid();
    const processorId = uuid();
    const storageId = uuid();
    const optionId = uuid();
    // const adId = uuid();

    const adData = {
      family_id: familyId,
      color_id: colorId,
      storage_id: storageId,
      screen_state_id: optionId,
      hull_state_id: optionId,
      option_id: optionId,
      price: 299
    };

    request(app)
      .post('/api/ads')
      .send(adData)
      .set('Accept', 'application/json')
      .expect(201)
      .end(error => {
        if (error) {
          done(error);
        } else {
          done();
        }
      });
  });
});
