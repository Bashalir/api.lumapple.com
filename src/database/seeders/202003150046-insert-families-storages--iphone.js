const moment = require('moment');

const dateNow = moment()
  .utc()
  .toDate();

const {
  familiesStorages,
} = require('../seeds/202003150040-data-families-storages--iphone');

module.exports = {
  up: async (queryInterface) => {
    const familiesID = await familiesStorages.map(async (familyStorage) => {
      const familyId = await queryInterface.rawSelect(
        'families',
        {
          where: {
            type: familyStorage.type,
          },
        },
        ['id'],
      );

      const storagesId = await familyStorage.capacity.map(async (capacity) => {
        const storageId = await queryInterface.rawSelect(
          'storages',
          {
            where: {
              capacity,
            },
          },
          ['id'],
        );

        return {
          family_id: familyId,
          storage_id: storageId,
          created_at: dateNow,
          updated_at: dateNow,
        };
      });
      const result = await Promise.all(storagesId);

      return result;
    });
    const result = await Promise.all(familiesID);
    // await console.log('family', result.flat(1));
    await queryInterface.bulkInsert('families_storages', result.flat(1));
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('families_storages', null, {});
  },
};
