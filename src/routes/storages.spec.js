const { expect } = require('chai');
// eslint-disable-next-line node/no-unpublished-require
const sinon = require('sinon');
const uuid = require('uuid/v4');

// eslint-disable-next-line node/no-unpublished-require
const request = require('supertest');
const app = require('../server');
// const { Storage } = require('../models');

describe('Routes :: storages.js', () => {
  it('should return a list of storage by category ref:"Iphone11"', (done) => {
    request(app)
      .get('/api/storages?ref=iphone11')
      .end(function(err, res) {
        // console.log(res);
        expect(res).to.be.an('object');
        done();
      });
  });
});
