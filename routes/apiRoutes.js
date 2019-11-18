var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/superheros", function (req, res) {
    db.Persona.findAll({}).then(function (Persona) {
      res.json(Persona);
    });
  });

  // Create a new example
  app.post("/api/superheros", function (req, res) {
    console.log(req);
    isIdUnique(req.body.id).then(isUnique => {
      if (isUnique) {
        db.Persona.create(req.body).then(function (Persona) {
          res.json(Persona);
        }).catch(function (err) {
          // print the error details
          console.log(err, req.body);
        });;
      }
    });
  });

  function isIdUnique(id) {
    return db.Persona.count({ where: { id: id } })
      .then(count => {
        if (count != 0) {
          return false;
        }
        return true;
      });
  }




  // Delete an example by id
  app.delete("/api/superheros/:id", function (req, res) {
    db.Persona.destroy({ where: { id: req.params.id } }).then(function (Persona) {
      res.json(Persona);
    });
  });
};
