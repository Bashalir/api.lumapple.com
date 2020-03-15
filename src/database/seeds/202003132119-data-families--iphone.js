const uuid = require('uuid/v4');
const moment = require('moment');

const dateNow = moment()
  .utc()
  .toDate();

const families = [
  {
    id: uuid(),
    type: 'iPhone 11 Pro Max',
    display_size: 6.5,
    created_at: dateNow,
    updated_at: dateNow,
  },
  {
    id: uuid(),
    type: 'iPhone 11 Pro',
    display_size: 5.8,
    created_at: dateNow,
    updated_at: dateNow,
  },
  {
    id: uuid(),
    type: 'iPhone 11',
    display_size: 6.1,
    created_at: dateNow,
    updated_at: dateNow,
  },
  {
    id: uuid(),
    type: 'iPhone XR',
    display_size: 6.1,
    created_at: dateNow,
    updated_at: dateNow,
  },
  {
    id: uuid(),
    type: 'iPhone 8 Plus',
    display_size: 5.5,
    created_at: dateNow,
    updated_at: dateNow,
  },
  {
    id: uuid(),
    type: 'iPhone 8',
    display_size: 4.7,
    created_at: dateNow,
    updated_at: dateNow,
  },
];

module.exports = {
  families,
};
