const uuid = require('uuid/v4');
const moment = require('moment');

const dateNow = moment()
  .utc()
  .toDate();

const categories = [
  {
    id: uuid(),
    type: 'Mac',
    created_at: dateNow,
    updated_at: dateNow,
  },
  {
    id: uuid(),
    type: 'MacBook',
    created_at: dateNow,
    updated_at: dateNow,
  },
  {
    id: uuid(),
    type: 'iPad',
    created_at: dateNow,
    updated_at: dateNow,
  },
  {
    id: uuid(),
    type: 'iPhone',
    created_at: dateNow,
    updated_at: dateNow,
  },
  {
    id: uuid(),
    type: 'Watch',
    created_at: dateNow,
    updated_at: dateNow,
  },
];

module.exports = {
  categories,
};
