const { Family } = require('../models');

async function allFamilies() {
  Family.findAll({
    attributes: ['id', 'type'],
    raw: true,
  });
}

module.exports = allFamilies;
