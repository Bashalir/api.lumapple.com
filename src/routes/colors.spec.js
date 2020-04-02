const { expect } = require('chai');
// eslint-disable-next-line node/no-unpublished-require
const sinon = require('sinon');
const uuid = require('uuid/v4');

// eslint-disable-next-line node/no-unpublished-require
const request = require('supertest');
const app = require('../server');
// const { Storage } = require('../models');

describe('Routes :: colors.js', () => {
  it('should return a list of colors by family ref "iphone11" ', (done) => {
    request(app)
      .get('/api/colors?ref=iphone11')
      .end(function(err, res) {
        console.log(res.body);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});
