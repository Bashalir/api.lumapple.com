const { expect } = require('chai');
// eslint-disable-next-line node/no-unpublished-require
const sinon = require('sinon');
const uuid = require('uuid/v4');

// eslint-disable-next-line node/no-unpublished-require
const request = require('supertest');
const app = require('../server');

// const promoController = require('./promos.controller');
// const db = require('../models');
// const Apprenant = db.apprenant;

describe('Routes :: index.js', () => {
  describe('get test', () => {
    it('should return Hello World', (done) => {
      request(app)
        .get('/api/admin')
        .end(function(err, res) {
          expect(res.statusCode).to.equal(200);
          expect(res.text).to.equal('Hello my admin!');
          done();
        });
    });
  });
});
