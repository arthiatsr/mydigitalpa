const db = require("../models");

// Defining methods for the authController
module.exports = {  
  find: function(req, res) {  
    console.log(req.params)      
    db.LogAdd
      .find({email: req.params.email},{password: req.params.password})
      .then(dbModel => {
        console.log(dbModel)
        return res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.LogAdd
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
