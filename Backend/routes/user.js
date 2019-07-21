 const express = require("express");
 const bcrypt = require("bcrypt"); 

 const User  = require("../Model/user");
 
 const router = express.Router();

 router.post("/signup", (req, res, next) => {
     bcrypt.hash(req.body.password, 10, )
     .then(hash =>  { 
        const user = new User ({
        email: req.body.email,
        password: hash
    }); 
      user.save() 
      .then (result => {
          res.status(201).json({
              message: 'User created!',
              result: result 
          });
      });
});  

router.post("/login",(req, res, next) => {
    User.find({ email: req.body.email })
     .then(user => {
          if (!user) {
            
          }
     })
})

 module.exports = router;