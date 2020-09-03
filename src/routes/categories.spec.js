// eslint-disable-next-line node/no-unpublished-require
const { expect } = require('chai');

// eslint-disable-next-line node/no-unpublished-require
const request = require('supertest');
const app = require('../server');
// const { Storage } = require('../models');

describe('Routes :: categories.js', () => {
  it('should return a list of all categories', done => {
    request(app)
      .get('/api/categories')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      });
  });
});
