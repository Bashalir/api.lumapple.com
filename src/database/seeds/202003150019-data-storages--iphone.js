const uuid = require('uuid/v4');
const moment = require('moment');

const dateNow = moment()
  .utc()
  .toDate();

const storages = [
  {
    id: uuid(),
    capacity: 64,
    created_at: dateNow,
    updated_at: dateNow,
  },
  {
    id: uuid(),
    capacity: 128,
    created_at: dateNow,
    updated_at: dateNow,
  },
  {
    id: uuid(),
    capacity: 256,
    created_at: dateNow,
    updated_at: dateNow,
  },
  {
    id: uuid(),
    capacity: 512,
    created_at: dateNow,
    updated_at: dateNow,
  },
];
module.exports = {
  storages,
};
