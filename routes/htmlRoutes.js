var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Persona.findAll({}).then(function(Persona) {
      res.render("index", {
        msg: "Welcome!",
        Persona: Persona
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/superheros/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(Persona) {
      res.render("Persona", {
        Persona: Persona
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
