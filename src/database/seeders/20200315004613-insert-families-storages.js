const moment = require('moment');

const dateNow = moment()
  .utc()
  .toDate();

const { familiesStorages } = require('../seeds/20200315004047-data-families-storages');

module.exports = {
  up: async queryInterface => {
    const familiesID = await familiesStorages.map(async familyStorage => {
      const familyId = await queryInterface.rawSelect(
        'families',
        {
          where: {
            type: familyStorage.type
          }
        },
        ['id']
      );

      const storagesId = await familyStorage.capacity.map(async capacity => {
        const storageId = await queryInterface.rawSelect(
          'storages',
          {
            where: {
              capacity
            }
          },
          ['id']
        );

        return {
          family_id: familyId,
          storage_id: storageId,
          created_at: dateNow,
          updated_at: dateNow
        };
      });

      return Promise.all(storagesId);
    });
    const allStoragesByFamily = await Promise.all(familiesID);

    await queryInterface.bulkInsert('families_storages', allStoragesByFamily.flat(1));
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete('families_storages', null, {});
  }
};
