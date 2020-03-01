const { expect } = require('chai');
// eslint-disable-next-line node/no-unpublished-require
const sinon = require('sinon');
const uuid = require('uuid/v4');

// eslint-disable-next-line node/no-unpublished-require
const request = require('supertest');
const app = require('../server');
const { Product } = require('../models');

describe('Routes :: index.js', () => {
  describe('admin:: admin_router.js', () => {
    it('should return admin', (done) => {
      request(app)
        .get('/api/admin')
        .end(function(err, res) {
          expect(res.statusCode).to.equal(200);
          expect(res.text).to.equal('admin');
          done();
        });
    });
  });

  describe('POST /roles', () => {
    afterEach((done) => {
      Product.truncate();
      done();
    });

    const data = {
      introductionDate: '10/27/2016',
      description: 'Apple MacBook Pro 13-Inch "Core i5" 2.0',
      model: 'MLL42LL/A',
      idModel: 'A1708 (EMC 2978)',
      ram: 8,
      storage: '256 GB SSD',
      processor: 'Core i5 (I5-6360U)',
      screen: '13.3" Widescreen',
      videoCard: 'Iris Graphics 540',
    };

    it('should return a new product object', (done) => {
      request(app)
        .post('/api/admin/products')
        .send(data)
        .set('Accept', 'application/json')
        .expect(201, done);
    });
  });
});
