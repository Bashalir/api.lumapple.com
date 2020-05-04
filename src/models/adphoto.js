'use strict';
module.exports = (sequelize, DataTypes) => {
  const AdPhoto = sequelize.define(
    'AdPhoto',
    {
      ad_id: DataTypes.STRING,
      color_id: DataTypes.STRING,
    },
    {},
  );
  AdPhoto.associate = function(models) {
    // associations can be defined here
  };
  return AdPhoto;
};
