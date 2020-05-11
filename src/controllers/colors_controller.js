const { Color, Family, FamilyColor } = require('../models');

const colorsController = {
  filter: async (query) => {


    const colorList = await Color.findAll({
      attributes: ['ref', 'name_fr', 'rgb'],
      order: [['name_fr', 'ASC']],
      through: { attributes: [] },
      required: false,
      include: [
        {
          model: Family,
          where: query,
          attributes: [],
          through: { attributes: [] },
        },
      ],
    });

    return colorList;
  },
};

module.exports = colorsController;
