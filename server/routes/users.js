var express = require("express");
var router = express.Router();
var User = require("./schema/User");

router
  .post("/register", function(req, res, next) {
    let Newuser = new User(req.body); // this is modal object.
    Newuser.save()
      .then(data => {
        console.log(data);
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
  })
  .post("/login", function(req, res, next) {
    User.findOne()
      .where("email")
      .equals(req.body.email)
      .where("password")
      .equals(req.body.password)
      .select("name")
      .then(user => {
        data = { name: user.name };
        console.log(JSON.stringify(data));
        res.json(data);
      })
      .catch(err => {
        console.log(err);
        res.status(404);
      });
  });

// connection.end();

module.exports = router;
