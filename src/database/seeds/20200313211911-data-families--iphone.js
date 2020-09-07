const uuid = require('uuid/v4');
const moment = require('moment');

const dateNow = moment()
  .utc()
  .toDate();

const families = [
  {
    id: uuid(),
    ref: 'iphone11_pro_max',
    type: 'iPhone 11 Pro Max',
    short_description: 'Écran Super Retina XDR 6.5"',
    description: 'Puce A13 Bionic\navec Neural Engine\ntroisième génération',
    specs: [
      'Écran OLED super Retina xdr 6,5" pouces',
      'Résistant à la poussière et à l’eau (jusqu’à 4 mètres pendant 30 minutes maximum, IP68)',
      'Triple appareil photo avec ultra grand-angle, grand-angle et téléobjectif 12 Mpx; mode nuit, mode portrait et vidéo 4K jusqu’à 60 briqué/S',
      'Caméra Avant truedepth 12 mpx avec mode portrait, vidéo 4K et ralenti',
      'Face ID pour l’authentification sécurisée et Apple Pay',
      'Puce A13 Bionic avec neural Engine de troisième génération',
      'Recharge rapide avec l’adaptateur 18 W fourni',
      'Recharge sans fil',
      'Ios avec le mode sombre, de nouveaux outils de retouche pour les photos et la vidéo, et de toutes nouvelles fonctionnalités de protection de la vie privée'
    ],
    display_size: 6.5,
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'iphone11_pro',
    type: 'iPhone 11 Pro',
    short_description: 'Écran Super Retina XDR 5.8"',
    description: 'Puce A13 Bionic\navec Neural Engine\ntroisième génération',
    specs: [
      'Écran OLED super Retina xdr 5,8" pouces',
      'Résistant à la poussière et à l’eau (jusqu’à 4 mètres pendant 30 minutes maximum, IP68)',
      'Triple appareil photo avec ultra grand-angle, grand-angle et téléobjectif 12 Mpx; mode nuit, mode portrait et vidéo 4K jusqu’à 60 briqué/S',
      'Caméra Avant truedepth 12 mpx avec mode portrait, vidéo 4K et ralenti',
      'Face ID pour l’authentification sécurisée et Apple Pay',
      'Puce A13 Bionic avec neural Engine de troisième génération',
      'Recharge rapide avec l’adaptateur 18 W fourni',
      'Recharge sans fil',
      'Ios avec le mode sombre, de nouveaux outils de retouche pour les photos et la vidéo, et de toutes nouvelles fonctionnalités de protection de la vie privée'
    ],
    display_size: 5.8,
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'iphone11',
    type: 'iPhone 11',
    short_description: 'Écran Super Retina XDR 6.1"',
    description: 'Puce A13 Bionic\navec Neural Engine\ntroisième génération',
    specs: [
      'Écran Liquid Retina HD 6,1" pouces',
      'Résistant à la poussière et à l’eau (jusqu’à 2 mètres pendant 30 minutes maximum, IP68)',
      'Double appareil photo ultra grand‑angle et grand‑angle 12 Mpx avec mode Nuit',
      'Caméra Avant truedepth 12 mpx avec mode portrait, vidéo 4K et ralenti',
      'Face ID pour l’authentification sécurisée et Apple Pay',
      'Puce A13 Bionic avec neural Engine de troisième génération',
      'Recharge rapide avec l’adaptateur 18 W fourni',
      'Recharge sans fil',
      'Ios avec le mode sombre, de nouveaux outils de retouche pour les photos et la vidéo, et de toutes nouvelles fonctionnalités de protection de la vie privée'
    ],
    display_size: 6.1,
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'iphonexr',
    type: 'iPhone XR',
    short_description: 'Écran Liquid Retina HD 6.1"',
    description: 'Puce A12 Bionic\navec Neural Engine\ntroisième génération',
    specs: [
      'Écran Liquid Retina HD 6,1" pouces',
      'Résistant à la poussière et à l’eau (jusqu’à 1 mètres pendant 30 minutes maximum, IP68)',
      'Caméra Avant truedepth 7 mpx avec mode portrait, vidéo 4K et ralenti',
      'Face ID pour l’authentification sécurisée et Apple Pay',
      'Puce A12 Bionic avec neural Engine de troisième génération',
      'Recharge rapide avec l’adaptateur 18 W fourni',
      'Recharge sans fil',
      'Ios avec le mode sombre, de nouveaux outils de retouche pour les photos et la vidéo, et de toutes nouvelles fonctionnalités de protection de la vie privée'
    ],
    display_size: 6.1,
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'iphone8_plus',
    type: 'iPhone 8 Plus',
    short_description: 'Écran Retina HD 5.5"',
    description: 'Puce A11 Bionic\navec Neural Engine',
    specs: [
      'Écran Liquid Retina HD 5,5" pouces',
      'Résistant à la poussière et à l’eau (jusqu’à 1 mètres pendant 30 minutes maximum, IP68)',
      'Caméra Avant truedepth 7 mpx avec mode portrait, vidéo 4K et ralenti',
      'Face ID pour l’authentification sécurisée et Apple Pay',
      'Puce A11 Bionic avec neural Engine de troisième génération',
      'Recharge rapide avec l’adaptateur 18 W fourni',
      'Recharge sans fil',
      'Ios avec le mode sombre, de nouveaux outils de retouche pour les photos et la vidéo, et de toutes nouvelles fonctionnalités de protection de la vie privée'
    ],
    display_size: 5.5,
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'iphone8',
    type: 'iPhone 8',
    short_description: 'Écran Retina HD 4.7"',
    description: 'Puce A11 Bionic\navec Neural Engine',
    specs: [
      'Écran Liquid Retina HD 4,7" pouces',
      'Résistant à la poussière et à l’eau (jusqu’à 1 mètres pendant 30 minutes maximum, IP68)',
      'Caméra Avant truedepth 7 mpx avec mode portrait, vidéo 4K et ralenti',
      'Face ID pour l’authentification sécurisée et Apple Pay',
      'Puce A11 Bionic avec neural Engine de troisième génération',
      'Recharge rapide avec l’adaptateur 18 W fourni',
      'Recharge sans fil',
      'Ios avec le mode sombre, de nouveaux outils de retouche pour les photos et la vidéo, et de toutes nouvelles fonctionnalités de protection de la vie privée'
    ],
    display_size: 4.7,
    created_at: dateNow,
    updated_at: dateNow
  }
];

module.exports = {
  families
};
