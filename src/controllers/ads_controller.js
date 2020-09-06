const Sequelize = require('sequelize');
const { Ad, User, Storage, Color, Family, Option, ScreenState, HullState } = require('../models');

const { Op } = Sequelize;

const adsController = {
  findAd: async ({ text }) => {
    const wordsOfText = text ? text.split(' ') : [''];
    const wordsFind = wordsOfText.map(word => `%${word}%`);

    try {
      const ads = await Ad.findAndCountAll({
        attributes: ['id', 'price', 'created_at'],
        include: [
          {
            model: Family,
            attributes: ['type', 'ref'],
            required: true
          },
          {
            model: ScreenState,
            attributes: ['nameFr', 'ref'],
            required: true
          },
          {
            model: HullState,
            attributes: ['nameFr', 'ref'],
            required: true
          },
          {
            model: Storage,

            attributes: ['capacity']
          },
          {
            model: Color,
            attributes: ['ref', 'nameFr', 'rgb']
          },
          { model: Option }
        ],
        where: {
          [Op.or]: {
            capacity: Sequelize.where(
              Sequelize.cast(Sequelize.col('Storage.capacity'), 'varchar'),
              {
                [Op.iLike]: wordsFind.length > 1 ? { [Op.any]: wordsFind } : `%${text}%`
              }
            ),
            type: Sequelize.where(Sequelize.col('Family.type'), {
              [Op.iLike]: wordsFind.length > 1 ? { [Op.any]: [wordsFind] } : `%${text}%`
            }),
            nameColor: Sequelize.where(Sequelize.col('Color.name_fr'), {
              [Op.iLike]: wordsFind.length > 1 ? { [Op.any]: wordsFind } : `%${text}%`
            }),
            nameHullState: Sequelize.where(Sequelize.col('HullState.name_fr'), {
              [Op.iLike]: wordsFind.length > 1 ? { [Op.any]: wordsFind } : `%${text}%`
            }),
            nameScreenState: Sequelize.where(Sequelize.col('ScreenState.name_fr'), {
              [Op.iLike]: wordsFind.length > 1 ? { [Op.any]: wordsFind } : `%${text}%`
            })
          }
        }
      });
      return ads;
    } catch (e) {
      throw new Error(e);
    }
  },

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

  getAdAll: async ({ page }) => {
    let getOffset = page;
    const limit = 2;
    try {
      if (!getOffset || page === 0) {
        getOffset = -1;
      }

      const offset = getOffset * limit < 0 ? 0 : getOffset * limit;

      const adList = await Ad.findAndCountAll({
        order: [['created_at', 'DESC']],
        attributes: ['id', 'price', 'created_at'],
        include: [
          { model: Family, attributes: ['type', 'ref'], required: true },
          { model: ScreenState, attributes: ['nameFr', 'ref'], required: true },
          { model: HullState, attributes: ['nameFr', 'ref'], required: true },
          { model: Storage, attributes: ['capacity'] },
          { model: Color, attributes: ['ref', 'nameFr', 'rgb'] },
          { model: Option }
        ],
        offset,
        limit
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
        attributes: ['id', 'mail'],
        raw: true,
        where: { firebase_id: adData.data.firebaseId }
      });

      const newAd = {
        ...adData.data,
        userId: userId[0].id,
        mail: userId[0].mail,
        firebaseId: adData.data.firebaseId
      };

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
