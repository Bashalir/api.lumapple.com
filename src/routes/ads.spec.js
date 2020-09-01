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
    const adId = uuid();

    const adData = {
      userId: '4efad9bb-90a4-4dfa-92e8-f5f86404e177',
      familyId: 'a8775c56-0555-4db5-b080-1331bf4b188a',
      colorId: '755e11a6-bacb-419a-ba34-58444fd67609',
      storageId: 'fba990ec-e405-4e5f-8c75-3e8aad0db996',
      screenStateId: '7d5a90b1-d62a-4328-bd07-124db02ff1b5',
      hullStateId: '7ea432cb-5613-40b5-a075-56d6edfb4873',
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
