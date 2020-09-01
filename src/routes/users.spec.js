/* eslint-disable */
// eslint-disable-next-line node/no-unpublished-require
// const { expect } = require('chai');

// eslint-disable-next-line node/no-unpublished-require
const request = require('supertest');
const uuid = require('uuid/v4');
const app = require('../server');
var faker = require('faker');

describe('Routes :: users.js', () => {
  it('should return status created ', done => {
    const provider_id = uuid();
    const firebase_id = uuid();
    const display_name = faker.name.firstName();
    const first_name = faker.name.firstName();
    const last_name = faker.name.lastName();
    const mail = faker.internet.email();

    const userData = {
      providerId: provider_id,
      firebaseId: firebase_id,
      displayName: display_name,
      firstName: first_name,
      lastName: last_name,
      mail: mail
    };

    request(app)
      .post('/api/users')
      .send(userData)
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
