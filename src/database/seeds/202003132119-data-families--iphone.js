const uuid = require('uuid/v4');
const moment = require('moment');

const dateNow = moment()
  .utc()
  .toDate();

const families = [
  {
    id: uuid(),
    ref: 'iphone11_pro_max',
    type: 'iPhone 11 Pro Max',
    display_size: 6.5,
    created_at: dateNow,
    updated_at: dateNow,
  },
  {
    id: uuid(),
    ref: 'iphone11_pro',
    type: 'iPhone 11 Pro',
    display_size: 5.8,
    created_at: dateNow,
    updated_at: dateNow,
  },
  {
    id: uuid(),
    ref: 'iphone11',
    type: 'iPhone 11',
    display_size: 6.1,
    created_at: dateNow,
    updated_at: dateNow,
  },
  {
    id: uuid(),
    ref: 'iphonexr',
    type: 'iPhone XR',
    display_size: 6.1,
    created_at: dateNow,
    updated_at: dateNow,
  },
  {
    id: uuid(),
    ref: 'iphone8_plus',
    type: 'iPhone 8 Plus',
    display_size: 5.5,
    created_at: dateNow,
    updated_at: dateNow,
  },
  {
    id: uuid(),
    ref: 'iphone8',
    type: 'iPhone 8',
    display_size: 4.7,
    created_at: dateNow,
    updated_at: dateNow,
  },
];

module.exports = {
  families,
};
