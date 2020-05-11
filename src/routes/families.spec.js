// eslint-disable-next-line node/no-unpublished-require
const { expect } = require('chai');

// eslint-disable-next-line node/no-unpublished-require
const request = require('supertest');
const app = require('../server');
// const { Storage } = require('../models');

describe('Routes :: families.js', () => {
  it('should return a list of Families by category ref "iphone" ', done => {
    request(app)
      .get('/api/families?ref=iphone')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      });
  });
});
