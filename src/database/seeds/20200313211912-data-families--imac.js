const uuid = require('uuid/v4');
const moment = require('moment');

const dateNow = moment()
  .utc()
  .toDate();

const families = [
  {
    id: uuid(),
    ref: 'imac21',
    type: 'iMac 21,5"',
    short_description: 'Processeur hexacœur à 3 GHz',
    description: '256 Go de stockage\nÉcran Retina 4K',
    specs: [
      'Processeur Intel Core i5 hexacœur de 8ᵉ génération à 3 GHz',
      'Turbo Boost jusqu’à 4,1 GHz',
      '8 Go de mémoire DDR4 à 2 666 MHz, configurable jusqu’à 32 Go',
      'SSD de 256 Go',
      'Radeon Pro 560X avec 4 Go de mémoire GDDR5',
      'Deux ports Thunderbolt 3',
      'Écran Retina 4K P3 de 4 096 x 2 304 pixels'
    ],
    display_size: 21.5,
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'imac27',
    type: 'iMac 27"',
    short_description: 'Processeur 8 cœurs à 3,8 GHz',
    description: '512 Go de stockage\nÉcran Retina 5K',
    specs: [
      'Processeur Intel Core i7 8 cœurs de 10ᵉ génération à 3,8 GHz',
      'Turbo Boost jusqu’à 5 GHz',
      '8 Go de mémoire DDR4 à 2 666 MHz, configurable jusqu’à 128 Go',
      'SSD de 512 Go¹',
      'Radeon Pro 5500 XT avec 8 Go de mémoire GDDR6',
      'Deux ports Thunderbolt 3',
      'Écran Retina 5K P3 de 5 120 x 2 880 pixels avec True Tone (verre nano‑texturé en option)'
    ],
    display_size: 27,
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'imac_pro',
    type: 'iMac Pro',
    short_description: 'Processeur Intel Xeon W à 3 GHz',
    description: 'SSD de 1 To\nÉcran Retina 5K 27"',
    specs: [
      'Processeur Intel Xeon W 10 cœurs à 3 GHz',
      'Turbo Boost jusqu’à 4,5 GHz',
      '32 Go de mémoire ECC à 2 666 MHz, configurable jusqu’à 256 Go',
      'SSD de 1 To¹',
      'Radeon Pro Vega 56 avec 8 Go de mémoire HBM2',
      '10 Gigabit Ethernet',
      'Quatre ports Thunderbolt 3',
      'Écran Retina 5K de 27 pouces d’une résolution de 5 120 x 2 880 pixels (P3)'
    ],
    display_size: 27,
    created_at: dateNow,
    updated_at: dateNow
  }
];

module.exports = {
  families
};
