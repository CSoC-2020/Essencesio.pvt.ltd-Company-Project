 const express = require("express");
 const bcrypt = require("bcrypt");
 const jwt = require("jsonwebtoken");

 const User  = require("../Model/user");

 const router = express.Router();

 router.post("/signup", (req, res, next) => {

  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      FirstName: req.body.firstname,
      LastName: req.body.lastname,
      email: req.body.email,
      password: hash,
      discription: ' ',
      about: ' '
    });
    user
      .save()
      .then(result => {
        res.status(201).json({
          message: "User created!",
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });
});


router.post("/login",(req, res, next) => {
    let fetchedUser;
    User.findOne({ email: req.body.email })
     .then(user => {
          if (!user) {
            return res.status(401).json({
                message: "Auth failed"
            });
          }
        fetchedUser = user;
        return bcrypt.compare(req.body.password, user.password);
     })
     .then(result => {
       if(!result) {
           return res.status(401).json({
               message: "Auth failed"
           });
       }
     const token = jwt.sign(
         {email: fetchedUser.email, userId: fetchedUser._id},
        'letmein@26',
        { expiresIn: "1h" }
      );
      res.status(200).json({
          token: token

      });
     })
     .catch(err => {
         return res.status(401).json({
             message: "Auth failed"
         });
     });
});
router.get("/userInfo:id", (req, res, next) => {
  User.findById(req.params.id).then(user => {
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "Post not found!" });
    }
  });
});
module.exports = router;
