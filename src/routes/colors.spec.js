const { expect } = require('chai');
// eslint-disable-next-line node/no-unpublished-require
const sinon = require('sinon');
const uuid = require('uuid/v4');

// eslint-disable-next-line node/no-unpublished-require
const request = require('supertest');
const app = require('../server');
// const { Storage } = require('../models');

describe('Routes :: colors.js', () => {
  it('should return a array with list of colors by "iphone11" family ', (done) => {
    request(app)
      .get('/api/colors?ref=iphone11')
      .end(function(err, res) {
        expect(res.body).to.be.an('array');
        console.log(res.body);
        done();
      });
      
  });
});
