/* eslint-disable */
// eslint-disable-next-line node/no-unpublished-require
// const { expect } = require('chai');

// eslint-disable-next-line node/no-unpublished-require
const request = require('supertest');
const uuid = require('uuid/v4');
const app = require('../server');

describe('Routes :: ads.js', () => {
  it('should return status created ', done => {
    const token =
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ5YWQ5YmM1ZThlNDQ3OTNhMjEwOWI1NmUzNjFhMjNiNDE4ODA4NzUiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiYmFzaHkiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbHVtYXBwbGUtdjEiLCJhdWQiOiJsdW1hcHBsZS12MSIsImF1dGhfdGltZSI6MTU5OTQyNTgwNywidXNlcl9pZCI6ImloVHdxekVMUUxadjEzUFlGb0dha0piOWlVRTMiLCJzdWIiOiJpaFR3cXpFTFFMWnYxM1BZRm9HYWtKYjlpVUUzIiwiaWF0IjoxNTk5NDI1ODA3LCJleHAiOjE1OTk0Mjk0MDcsImVtYWlsIjoiYmFzaGl6ZXJAbGl2ZS5mciIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJiYXNoaXplckBsaXZlLmZyIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.oE8sXezkondBN-Tzs8tbv64xdhJNgU3THRb_TWiAFV1KTwTmMxxK2ddi37qBObIngjApfEniUeelEPwEBaJKJvYdEm8evgaa6un6mJgYTBse_1sal2N8v8qRL_mff12Tz8QfLA4Xg6w7XvhuBeeCr4DcksT2UHP5t3OIUk0D3iQvRAfgHvH20NdmX5f7EXPhO9wY0Xd4aO463OGj63WTWumipZcpHFpENpbNtcmeKsmqzVtGQ6LjFX3ezetefdUAFOafqO3ZNp9FfTvIsaj5MhYCwwcUUI-UpXlZfZ3SU7BfIOyQauawq1RbBN1kU6KAd3NMYrSYdfKUW7VzzH7ynQ';

    const adData = {
      data: {
        familyId: '9f46ba00-7b18-4a99-bc3f-76cfdd1f148d',
        colorId: '21805e4f-f554-4c39-888c-5bdde4775941',
        storageId: '1bc571af-31cf-4b9c-8eb2-6347b7d2f54e',
        screenStateId: 1,
        hullStateId: 3,
        price: 299,
        mail: 'bashizer@live.fr'
      }
    };

    request(app)
      .post('/api/ads')
      .send(adData)
      .set('Accept', 'application/json')
      .set('Authorization', token)
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
