const uuid = require('uuid/v4');
const moment = require('moment');

const dateNow = moment()
  .utc()
  .toDate();

const families = [
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
  }
];

module.exports = {
  families
};
