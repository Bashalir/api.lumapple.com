const moment = require('moment');

const dateNow = moment()
  .utc()
  .toDate();

const screenStates = [
  {
    id: 1,
    ref: 'mint',
    name_en: 'Mint',
    name_fr: 'Intact',
    order: 1,
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: 2,
    ref: 'light_scratches',
    name_en: 'Light scratches',
    name_fr: 'Micro-rayures',
    order: 2,
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: 3,
    ref: 'scratches',
    name_en: 'Scratches',
    name_fr: 'Rayures',
    order: 3,
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: 4,
    ref: 'broken',
    name_en: 'Broken',
    name_fr: 'Cassé',
    order: 4,
    created_at: dateNow,
    updated_at: dateNow
  }
];
module.exports = {
  screenStates
};
