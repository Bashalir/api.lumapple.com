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
  },
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
    short_description: 'Processeur Intel Xeon',
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
  },
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
    short_description: 'Processeur Core i5 1,1 GHz',
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
  },
  {
    id: uuid(),
    ref: 'watch5',
    type: 'Watch Series 5',
    short_description: 'GPS + Cellular',
    description: 'Écran Retina OLED LTPO\nFormats de boîtier de 44 mm',
    specs: [
      'Boîtier de 40 mm ou de 44 mm ; écran plus de 30 % plus grand',
      'Écran Retina OLED LTPO toujours activé avec Force Touch, 1 000 nits',
      'Modèles GPS et GPS + Cellular',
      'Puce S5 avec processeur bicœur 64 bits ; puce W3 sans fil',
      'Digital Crown avec retour haptique',
      'Capteur électrique de fréquence cardiaque et capteur optique de fréquence cardiaque de 2ᵉ génération',
      'Notifications en cas de fréquence cardiaque élevée/basse ou d’arythmie, et app ECG1',
      'Appel d’urgence international3, Appel d’urgence2 et détection des chutes',
      'Étanche jusqu’à 50 mètres',
      'LTE et UMTS5 Wi‑Fi et Bluetooth 5.0',
      'GPS/GNSS, boussole et altimètre barométrique',
      'Haut-parleur 50 % plus puissant ; micro intégré',
      'Capacité de 32 Go'
    ],
    display_size: 44,
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'watch3',
    type: 'Watch Series 3',
    short_description: 'GPS + Cellular',
    description: 'Écran Retina OLED\nFormats de boîtier de 42 mm',
    specs: [
      'Boîtier de 38 mm ou 42 mm',
      'Écran Retina OLED de 2ᵉ génération avec Force Touch, 1 000 nits',
      'Modèles GPS et GPS + Cellular',
      'Puce S3 avec processeur bicœur ; puce W2 sans fil',
      'Digital Crown',
      'Capteur optique de fréquence cardiaque',
      'Notifications en cas de fréquence cardiaque élevée/basse ou d’arythmie',
      'Appel d’urgence2',
      'Étanche jusqu’à 50 mètres',
      'LTE et UMTS5 Wi‑Fi et Bluetooth 5.0',
      'GPS/GNSS et altimètre barométrique',
      'Haut-parleur et micro intégrés',
      'Capacité de 16 Go (GPS + Cellular) ; capacité de 8 Go (GPS)'
    ],
    display_size: 42,
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'watch_nike',
    type: 'Watch Nike',
    short_description: 'GPS + Cellular',
    description: 'Écran Retina OLED LTPO\nFormats de boîtier de 44 mm',
    specs: [
      'Boîtier de 40 mm ou de 44 mm ; écran plus de 30 % plus grand',
      'Écran Retina OLED LTPO avec Force Touch, 1 000 nits',
      'Modèles GPS et GPS + Cellular',
      'Puce S4 avec processeur bicœur 64 bits ; puce W3 sans fil',
      'Digital Crown avec retour haptique',
      'Capteur électrique de fréquence cardiaque et capteur optique de fréquence cardiaque de 2ᵉ génération',
      'Notifications en cas de fréquence cardiaque élevée/basse ou d’arythmie, et app ECG1',
      'Appel d’urgence2 et détection des chutes',
      'Étanche jusqu’à 50 mètres',
      'LTE et UMTS5 Wi‑Fi et Bluetooth 5.0',
      'GPS/GNSS et altimètre barométrique',
      'Haut-parleur 50 % plus puissant ; micro intégré',
      'Capacité de 16 Go'
    ],
    display_size: 44,
    created_at: dateNow,
    updated_at: dateNow
  },
  {
    id: uuid(),
    ref: 'iphone11_pro_max',
    type: 'iPhone 11 Pro Max',
    short_description: 'Écran Super Retina XDR 6.5"',
    description: 'Puce A13 Bionic\navec Neural Engine\ntroisième génération',
    specs: [
      'Écran OLED super Retina xdr 6,5" pouces',
      'Résistant à la poussière et à l’eau (jusqu’à 4 mètres pendant 30 minutes maximum, IP68)',
      'Triple appareil photo avec ultra grand-angle, grand-angle et téléobjectif 12 Mpx',
      'Caméra Avant truedepth 12 mpx avec mode portrait, vidéo 4K et ralenti',
      'Face ID pour l’authentification sécurisée et Apple Pay',
      'Puce A13 Bionic avec neural Engine de troisième génération',
      'Recharge rapide avec l’adaptateur 18 W fourni',
      'Recharge sans fil'
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
      'Triple appareil photo avec ultra grand-angle, grand-angle et téléobjectif 12 Mpx',
      'Caméra Avant truedepth 12 mpx avec mode portrait, vidéo 4K et ralenti',
      'Face ID pour l’authentification sécurisée et Apple Pay',
      'Puce A13 Bionic avec neural Engine de troisième génération',
      'Recharge rapide avec l’adaptateur 18 W fourni',
      'Recharge sans fil'
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
      'Recharge sans fil'
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
      'Recharge sans fil'
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
      'Recharge sans fil'
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
      'Recharge sans fil'
    ],
    display_size: 4.7,
    created_at: dateNow,
    updated_at: dateNow
  }
];

module.exports = {
  families
};
