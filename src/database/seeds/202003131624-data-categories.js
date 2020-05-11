const uuid = require('uuid/v4');
const moment = require('moment');

const dateNow = moment()
  .utc()
  .toDate();

const categories = [
  {
    id: uuid(),
    ref: 'mac',
    type: 'Mac',
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'macbook',
    type: 'MacBook',
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'ipad',
    type: 'iPad',
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'iphone',
    type: 'iPhone',
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'watch',
    type: 'Watch',
    created_at: dateNow,
    updated_at: dateNow
  }
];

module.exports = {
  categories
};
