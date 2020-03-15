/* eslint-disable no-unused-expressions */
/* eslint-disable node/no-unpublished-require */
const { expect } = require('chai');
const sinon = require('sinon');
const uuid = require('uuid/v4');

const familiesController = require('./families_controller');

const { Family } = require('../models');

describe('Controllers :: familiesController', () => {
  describe('#allFamilies', () => {
    it('should return a object', async () => {
      // Given

      // When
      const allFamilies = await familiesController.allFamilies();

      // Then
      console.log(allFamilies);
      expect(allFamilies).to.be.a('array');
    });
  });
});
