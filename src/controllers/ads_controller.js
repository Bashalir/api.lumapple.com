const { Ad } = require('../models');

const adsController = {
  postAd: async adData => {
    try {
      // eslint-disable-next-line camelcase
      const { family_id, color_id, processor_id, storage_id, option_id, price } = adData;

      const newAd = await Ad.create({
        family_id,
        color_id,
        processor_id,
        storage_id,
        option_id,
        price
      });
      return newAd;
    } catch (e) {
      throw new Error("Erreur can't post", e);
    }
  },

  deleteAd: async adId => {
    try {
      const adToDelete = await Ad.findByPk(adId);
      return adToDelete.destroy;
    } catch (e) {
      throw new Error("Erreur can't delete", e);
    }
  }
};

module.exports = adsController;
