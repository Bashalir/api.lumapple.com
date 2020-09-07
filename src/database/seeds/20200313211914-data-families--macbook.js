const uuid = require('uuid/v4');
const moment = require('moment');

const dateNow = moment()
  .utc()
  .toDate();

const families = [
  {
    id: uuid(),
    ref: 'macbook16_pro',
    type: 'MacBook Pro 16"',
    short_description: 'Processeur 8 cœurs à 2,3 GHz',
    description: '1 To de stockage\nAMD Radeon Pro 5500M',
    specs: [
      'Processeur Intel Core i9 8 cœurs de 9e génération à 2,3 GHz',
      'Turbo Boost jusqu’à 4,8 GHz',
      'AMD Radeon Pro 5500M avec 4 Go de mémoire GDDR6',
      '16 Go de mémoire DDR4 à 2 666 MHz',
      'SSD de 1 To',
      'Écran Retina de 16 pouces avec affichage True Tone',
      'Magic Keyboard',
      'Touch Bar et Touch ID',
      'Quatre ports Thunderbolt 3'
    ],
    display_size: 16,
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'macbook13_pro',
    type: 'MacBook Pro 13"',
    short_description: 'Processeur quadricœur à 2 GHz',
    description: '1 To de stockage\nAMD Radeon Pro 5500M',
    specs: [
      'Processeur Intel Core i5 quadricœur de 10ᵉ génération à 2 GHz',
      'Turbo Boost jusqu’à 3,8 GHz',
      'Intel Iris Plus Graphics',
      '16 Go de mémoire LPDDR4X à 3 733 MHz',
      'SSD de 512 Go',
      'Écran Retina de 13 pouces avec affichage True Tone',
      'Magic Keyboard',
      'Touch Bar et Touch ID',
      'Quatre ports Thunderbolt 3'
    ],
    display_size: 13,
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'macbook_air',
    type: 'MacBook Air',
    short_description: 'Processeur Core i5 quadricœur à 1,1 GHz',
    description: '512 Go de stockage\nTouch ID',
    specs: [
      'Écran Retina avec affichage True Tone',
      'Processeur Intel Core i5 quadricœur de 10e génération à 1,1 GHz (Turbo Boost jusqu’à 3,5 GHz)',
      'Intel Iris Plus Graphics',
      '8 Go de mémoire LPDDR4X à 3 733 MHz',
      'SSD de 512 Go',
      'Magic Keyboard',
      'Touch ID',
      'Trackpad Force Touch',
      'Deux ports Thunderbolt 3'
    ],
    display_size: 13,
    created_at: dateNow,
    updated_at: dateNow
  }
];

module.exports = {
  families
};
