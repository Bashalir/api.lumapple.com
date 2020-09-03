const { Ad, User } = require('../models');

const adsController = {
  postAd: async adData => {
    try {
      // eslint-disable-next-line camelcase

      const userId = await User.findAll({
        limit: 1,
        attributes: ['id'],
        raw: true,
        where: { firebase_id: adData.firebaseId }
      });

      const ad = { ...adData, userId: userId[0].id };
      console.debug(userId[0].id);
      const newAd = await Ad.create(ad);
      return newAd;
    } catch (e) {
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
