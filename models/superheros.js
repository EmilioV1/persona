module.exports = function(sequelize, DataTypes) {
  var Persona = sequelize.define("Persona", {
    name: DataTypes.STRING,
    intelligence: DataTypes.INTEGER,
    speed: DataTypes.INTEGER,
    power: DataTypes.INTEGER,
    placeofbirth: DataTypes.STRING,
    publisher: DataTypes.STRING,
    gender: DataTypes.STRING,
    race: DataTypes.STRING,
    image: DataTypes.STRING
  });
  return Persona;
};
