const moment = require('moment');

const dateNow = moment()
  .utc()
  .toDate();

const {
  familiesColors,
} = require('../seeds/202003141541-data-families-colors--iphone');

module.exports = {
  up: async (queryInterface) => {
    const familiesID = await familiesColors.map(async (familyColor) => {
      const familyId = await queryInterface.rawSelect(
        'families',
        {
          where: {
            type: familyColor.type,
          },
        },
        ['id'],
      );

      const colorsId = await familyColor.colors.map(async (color) => {
        const colorId = await queryInterface.rawSelect(
          'colors',
          {
            where: {
              ref: color,
            },
          },
          ['id'],
        );

        return {
          family_id: familyId,
          color_id: colorId,
          created_at: dateNow,
          updated_at: dateNow,
        };
      });
      const result = await Promise.all(colorsId);

      return result;
    });
    const result = await Promise.all(familiesID);
    // await console.log('family', result.flat(1));
    await queryInterface.bulkInsert('families_colors', result.flat(1));
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('families_colors', null, {});
  },
};
