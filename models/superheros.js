module.exports = function(sequelize, DataTypes) {
  var Persona = sequelize.define("Persona", {
    name: DataTypes.STRING,
    intelligence: DataTypes.INTEGER,
    speed: DataTypes.INTEGER,
  });
  return Persona;
};
