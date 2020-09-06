/* eslint-disable */
// eslint-disable-next-line node/no-unpublished-require
// const { expect } = require('chai');

// eslint-disable-next-line node/no-unpublished-require
const request = require('supertest');
const uuid = require('uuid/v4');

var chai = require('chai'),
  chaiHttp = require('chai-http');
const sinon = require('sinon');

const auth = require('../middlewares/firebase_auth_middleware');

let server;
const token = 'token';

chai.use(chaiHttp);
chai.should();

describe('Routes :: ads.js', () => {
  beforeEach(function() {
    server = require('../server');
    sinon.stub(auth, 'decodeFirebaseIdToken').callsFake((req, res, callback) => {
      return (req, res, next) => {};
    });
  });

  it('should return status created 201', done => {
    return chai
      .request(server)
      .post('/api/ads')
      .set('Content-Type', 'application/json')
      .set('Authorization', token)
      .send({})
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        done();
      });
  });
});
