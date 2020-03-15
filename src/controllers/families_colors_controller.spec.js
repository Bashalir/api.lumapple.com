/* eslint-disable no-unused-expressions */
/* eslint-disable node/no-unpublished-require */
const { expect } = require('chai');
const sinon = require('sinon');
const uuid = require('uuid/v4');

const { Family } = require('../models');
// const { allFamilies } = require('./families_colors_controller');

describe('Controllers :: familiesColorsController', () => {
  describe('#allFamillies', () => {
    it('should return a object', async () => {
      // Given

      // When

      // Then

      async function getFamilies() {
        Family.findAll({
          attributes: ['id', 'type'],
          raw: true,
        });
      }

      await getFamilies().then((e) => console.log(e));

      await expect(test()).to.be.a('array');
    });
  });
});
