const uuid = require('uuid/v4');
const moment = require('moment');

const dateNow = moment()
  .utc()
  .toDate();

const colors = [
  {
    id: uuid(),
    ref: 'm_green',
    name_en: 'Midnight Green',
    name_fr: 'Vert nuit',
    rgb: '#4e5851',
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'silver',
    name_en: 'Silver',
    name_fr: 'Argent',
    rgb: '#ebebe3',
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 's_gray',
    name_en: 'Space Gray',
    name_fr: 'Gris sidéral',
    rgb: '#535150',
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 's_gold',
    name_en: 'Gold',
    name_fr: 'Or',
    rgb: '#fad7bd',
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'purple',
    name_en: 'Purple',
    name_fr: 'Mauve',
    rgb: '#d1cdda',
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'p_yellow',
    name_en: 'Yellow',
    name_fr: 'Jaune',
    rgb: '#ffe681',
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'p_green',
    name_en: 'Green',
    name_fr: 'Vert',
    rgb: '#aee1cd',
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'black',
    name_en: 'Black',
    name_fr: 'Noir',
    rgb: '#1f2020',
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'p_white',
    name_en: 'White',
    name_fr: 'Blanc',
    rgb: '#f9f6ef',
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'product_red',
    name_en: 'Red',
    name_fr: 'Rouge',
    rgb: '#ba0c2e',
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'blue',
    name_en: 'Blue',
    name_fr: 'Bleu',
    rgb: '#48aee6',
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'white',
    name_en: 'White',
    name_fr: 'Blanc',
    rgb: '#f3f3f3',
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'yellow',
    name_en: 'Yellow',
    name_fr: 'Jaune',
    rgb: '#f9d045',
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'coral',
    name_en: 'Coral',
    name_fr: 'Corail',
    rgb: '#ff6e5a',
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'gold',
    name_en: 'Gold',
    name_fr: 'Or',
    rgb: '#e3ccb4',
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'rose_gold',
    name_en: 'Rose Gold',
    name_fr: 'Or rose',
    rgb: '#ecc6c1',
    created_at: dateNow,
    updated_at: dateNow
  }
];

module.exports = {
  colors
};
