const { PhotoAD } = require('../models');

const adsPhotosController = {
  allPhotosByAdId: async adId => {
    const photoList = await PhotoAD.findAll({
      where: { ad_id: adId },
      attributes: ['photo_url'],
      order: [['photo_url', 'ASC']],
      through: { attributes: [] }
    });

    return photoList;
  },

  postPhoto: async photoData => {
    try {
      // eslint-disable-next-line camelcase

      const newPhoto = await PhotoAD.create(photoData);
      return newPhoto;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  },

  deletePhoto: async photoID => {
    try {
      const adToDelete = await PhotoAD.findByPk(photoID);
      return adToDelete.destroy;
    } catch (e) {
      throw new Error("Erreur can't delete :", e);
    }
  }
};

module.exports = adsPhotosController;
