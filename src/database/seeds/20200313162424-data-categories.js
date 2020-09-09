const moment = require('moment');

const dateNow = moment()
  .utc()
  .toDate();

const categories = [
  {
    id: 1,
    ref: 'imac',
    type: 'iMac',
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: 2,
    ref: 'macbook',
    type: 'MacBook',
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: 3,
    ref: 'ipad',
    type: 'iPad',
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: 4,
    ref: 'iphone',
    type: 'iPhone',
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: 5,
    ref: 'watch',
    type: 'Watch',
    created_at: dateNow,
    updated_at: dateNow
  }
];

module.exports = {
  categories
};
