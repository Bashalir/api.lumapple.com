const { Ad } = require('../models');

const adsController = {
  postAd: async adData => {
    try {
      // eslint-disable-next-line camelcase

      const newAd = await Ad.create(adData);
      return newAd;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  },

  deleteAd: async adId => {
    try {
      const adToDelete = await Ad.findByPk(adId);
      return adToDelete.destroy;
    } catch (e) {
      throw new Error("Erreur can't delete :", e);
    }
  }
};

module.exports = adsController;
