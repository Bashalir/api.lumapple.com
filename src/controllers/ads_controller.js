const { Ad, User, Storage, Color, Family, Option, ScreenState, HullState } = require('../models');

const adsController = {
  getAd: async adId => {
    try {
      const ad = await Ad.findAll({
        where: { id: adId },
        limit: 1,
        attributes: ['id', 'price', 'created_at'],
        include: [
          { model: Family, attributes: ['type', 'ref'], required: true },
          { model: ScreenState, attributes: ['nameFr', 'ref'], required: true },
          { model: HullState, attributes: ['nameFr', 'ref'], required: true },
          { model: Storage, attributes: ['capacity'] },
          { model: Color, attributes: ['ref', 'nameFr', 'rgb'] },
          { model: Option }
        ]
      });
      return ad[0];
    } catch (e) {
      throw new Error(e);
    }
  },

  getAdAll: async () => {
    try {
      const adList = await Ad.findAll({
        order: [['created_at', 'DESC']],
        attributes: ['id', 'price', 'created_at'],
        include: [
          { model: Family, attributes: ['type', 'ref'], required: true },
          { model: ScreenState, attributes: ['nameFr', 'ref'], required: true },
          { model: HullState, attributes: ['nameFr', 'ref'], required: true },
          { model: Storage, attributes: ['capacity'] },
          { model: Color, attributes: ['ref', 'nameFr', 'rgb'] },
          { model: Option }
        ]
      });

      return adList;
    } catch (e) {
      throw new Error(e);
    }
  },

  postAd: async adData => {
    try {
      // eslint-disable-next-line camelcase

      const userId = await User.findAll({
        limit: 1,
        attributes: ['id'],
        raw: true,
        where: { firebase_id: adData.firebaseId }
      });

      const newAd = { ...adData, userId: userId[0].id };
      console.debug(userId[0].id);
      const ad = await Ad.create(newAd);
      return ad;
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
