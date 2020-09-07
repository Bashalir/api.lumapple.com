const uuid = require('uuid/v4');
const moment = require('moment');

const dateNow = moment()
  .utc()
  .toDate();

const families = [
  {
    id: uuid(),
    ref: 'ipad_pro',
    type: 'iPad Pro',
    short_description: 'Puce A12Z Bionic',
    description: 'Écran Liquid Retina 12,9"',
    specs: [
      'Écran Retina de 12,9 pouces avec ProMotion, True Tone et large gamme de couleurs',
      'Puce A12Z Bionic',
      'Capteur d’empreinte digitale Touch ID',
      'Appareil photo arrière 12 Mpx, caméra avant FaceTime HD 7 Mpx',
      'Quatre haut-parleurs',
      'Wi‐Fi 802.11ac',
      'Jusqu’à 10 heures d’autonomie',
      'Connecteur Lightning pour la recharge et les accessoires',
      'iOS 12 avec FaceTime en groupe, expériences de réalité augmentée partagées, Temps d’écran, et bien plus encore'
    ],
    display_size: 12.9,
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'ipad_air',
    type: 'iPad Air',
    short_description: 'Puce A12 Bionic',
    description: 'Écran Retina 10,5"',
    specs: [
      'Écran Retina',
      'Écran rétroéclairé par LED de 10,5 pouces (diagonale) avec',
      'Multi‑Touch et technologie IPS',
      'Résolution de 2 224 x 1 668 pixels à 264 ppp',
      'Luminosité maximale de 500 nits (standard)',
      'Revêtement oléophobe résistant aux traces de doigts',
      'Écran laminé',
      'Revêtement antireflet',
      'Technologie ProMotion',
      'Large gamme de couleurs (P3)',
      'Affichage True Tone'
    ],
    display_size: 10.5,
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'ipad',
    type: 'iPad',
    short_description: 'Puce A12 Bionic',
    description: 'Écran Retina 10,2"',
    specs: [
      'Écran Retina',
      'Écran rétroéclairé par LED de 10,5 pouces (diagonale) avec',
      'Multi‑Touch et technologie IPS',
      'Résolution de 2 224 x 1 668 pixels à 264 ppp',
      'Luminosité maximale de 500 nits (standard)',
      'Revêtement oléophobe résistant aux traces de doigts',
      'Écran laminé',
      'Revêtement antireflet',
      'Technologie ProMotion',
      'Large gamme de couleurs (P3)',
      'Affichage True Tone'
    ],
    display_size: 10.2,
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'ipad_mini',
    type: 'iPad Mini',
    short_description: 'Puce A12 Bionic',
    description: 'Écran Retina 7,9"',
    specs: [
      'Écran Retina',
      'Écran rétroéclairé par LED de 10,5 pouces (diagonale) avec',
      'Multi‑Touch et technologie IPS',
      'Résolution de 2 224 x 1 668 pixels à 264 ppp',
      'Luminosité maximale de 500 nits (standard)',
      'Revêtement oléophobe résistant aux traces de doigts',
      'Écran laminé',
      'Revêtement antireflet',
      'Technologie ProMotion',
      'Large gamme de couleurs (P3)',
      'Affichage True Tone'
    ],
    display_size: 7.9,
    created_at: dateNow,
    updated_at: dateNow
  }
];

module.exports = {
  families
};
