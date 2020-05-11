module.exports = (sequelize, DataTypes) => {
  const CategoryPhoto = sequelize.define(
    'CategoryPhoto',
    {
      references: DataTypes.STRING,
      folder_name: DataTypes.STRING,
    },
    {},
  );
  CategoryPhoto.associate = function(models) {
    // associations can be defined here
  };
  return CategoryPhoto;
};
