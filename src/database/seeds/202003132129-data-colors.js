const uuid = require('uuid/v4');
const moment = require('moment');

const dateNow = moment()
  .utc()
  .toDate();

const iphoneId = '';

const colors = [
  {
    id: uuid(),
    type_en: 'Midnight Green',
    type_fr: 'Vert nuit',
    rgb: '4e5851',
    categorie_id: iphoneId,
    created_at: dateNow,
    updated_at: dateNow,
  },
];

module.exports = {
  colors,
};
