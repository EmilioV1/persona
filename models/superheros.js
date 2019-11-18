module.exports = function (sequelize, DataTypes) {
  var Persona = sequelize.define("Persona", {
    name: DataTypes.STRING,
    fullname: DataTypes.STRING,
    firstappearance: DataTypes.STRING,
    publisher: DataTypes.STRING,
    alignment: DataTypes.STRING,
    race: DataTypes.STRING,
    placeofbirth: DataTypes.STRING,
    gender: DataTypes.STRING,
    height: DataTypes.STRING,
    weight: DataTypes.STRING,
    intelligence: DataTypes.INTEGER,
    strength: DataTypes.INTEGER,
    speed: DataTypes.INTEGER,
    durability: DataTypes.INTEGER,
    power: DataTypes.INTEGER,
    combat: DataTypes.INTEGER,
    image: DataTypes.STRING
  });
  return Persona;
};