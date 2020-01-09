const db = require("../models");

// Defining methods for the authController
module.exports = {  
  find: function(req, res) {  
    console.log("req.params",req.params)      
    db.LogAdd
      .find({email: req.params.email, password: req.params.password}
                // where: {email: req.params.email,password: req.params.password, function(err,found){

        // email: req.params.email,password: req.params.password }, function(err,found){
          // console.log("res.status",res.status)
          // if(res.status === 200){
          //   res.json(dbModel)
          // }else{
          //   res.status(422).json(err)
          // }
        // }
        // , password : req.params.email }
          // where: {email: req.params.email

        // where: {email: req.params.email,password: req.params.password
        
      // }        }
      )
      .then(db => {
        console.log(db)
        return db
      })
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
