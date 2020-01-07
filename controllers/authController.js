const db = require("../models");

// Defining methods for the authController
module.exports = {  
  find: function(req, res) {        
    db.LogAdd
      .find({email: req.params.email},{password: req.params.password})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.LogAdd
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
