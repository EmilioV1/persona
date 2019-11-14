var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/superheros", function(req, res) {
    db.Persona.findAll({}).then(function(Persona) {
      res.json(Persona);
    });
  });

  // Create a new example
  app.post("/api/superheros", function(req, res) {
    db.Persona.create(req.body).then(function(Persona) {
      res.json(Persona);
    });
  });

  // Delete an example by id
  app.delete("/api/superheros/:id", function(req, res) {
    db.Persona.destroy({ where: { id: req.params.id } }).then(function(Persona) {
      res.json(Persona);
    });
  });
};
