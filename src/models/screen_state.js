module.exports = (sequelize, DataTypes) => {
  const ScreenState = sequelize.define(
    'ScreenState',
    {
      ref: DataTypes.STRING,
      name: DataTypes.STRING,
      order: DataTypes.INTEGER,
    },
    {},
  );
  ScreenState.associate = function(models) {
    // associations can be defined here
  };
  return ScreenState;
};
