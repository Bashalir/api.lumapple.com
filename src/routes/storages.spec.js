const { expect } = require('chai');
// eslint-disable-next-line node/no-unpublished-require
const sinon = require('sinon');
const uuid = require('uuid/v4');

// eslint-disable-next-line node/no-unpublished-require
const request = require('supertest');
const app = require('../server');
// const { Storage } = require('../models');

describe('Routes :: storages.js', () => {
  // describe('storage:: storage.js', () => {
  //   it('should return storage', (done) => {
  //     request(app)
  //       .get('/api/storages')
  //       .end(function(err, res) {
  //         expect(res.statusCode).to.equal(200);
  //         expect(res.text).to.equal('storages');
  //         done();
  //       });
  //   });

  it('should return a list of storage by category type Iphone', (done) => {
    request(app)
      .get('/api/storages?type=iPhone')
      .end(function(err, res) {
        // console.log(res);
        expect(res).to.be.an('array');
        done();
      });
  });
});
