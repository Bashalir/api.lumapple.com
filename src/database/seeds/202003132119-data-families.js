const uuid = require('uuid/v4');
const moment = require('moment');

const dateNow = moment()
  .utc()
  .toDate();

const families = [
  {
    id: uuid(),
    type: 'iPhone 11 Pro Max',
    created_at: dateNow,
    updated_at: dateNow,
  },
  {
    id: uuid(),
    type: 'iPhone 11 Pro',
    created_at: dateNow,
    updated_at: dateNow,
  },
  {
    id: uuid(),
    type: 'iPhone 11',
    created_at: dateNow,
    updated_at: dateNow,
  },
  {
    id: uuid(),
    type: 'iPhone XR',
    created_at: dateNow,
    updated_at: dateNow,
  },
  {
    id: uuid(),
    type: 'iPhone 8 Plus',
    created_at: dateNow,
    updated_at: dateNow,
  },
  {
    id: uuid(),
    type: 'iPhone 8',
    created_at: dateNow,
    updated_at: dateNow,
  },
];

module.exports = {
  families,
};
