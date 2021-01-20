// eslint-disable-next-line node/no-unpublished-require
const { expect } = require('chai');

// eslint-disable-next-line node/no-unpublished-require
const request = require('supertest');
const app = require('../server');

describe('Routes :: colors.js', () => {
  it(
    'should return a array with list of colors by "iphone11" family ',
    done => {
      request(app)
        .get('/api/colors?ref=iphone11')
        .end((err, res) => {
          expect(res.body).to.be.an('array');
          done();
        });
    }
  );
});
