var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
var User = require("./schema/User");
mongoose
  .connect("mongodb://localhost/grievances", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(
    () => {
      console.log("connected");
    },
    err => {
      console.log("err", err);
    }
  );
router
  .post("/register", function(req, res, next) {
    let Newuser = new User(req.body); // this is modal object.
    Newuser.save()
      .then(data => {
        console.log(data);
        var data = {
          role: "user",
          data: {
            displayName: Newuser.name,
            id: Newuser.id,
            email: Newuser.email,
            photoURL: "assets/images/avatars/profile.jpg",
            settings: {
              layout: {
                style: "layout1",
                config: {
                  scroll: "content",
                  navbar: {
                    display: true,
                    folded: true,
                    position: "left"
                  },
                  toolbar: {
                    display: true,
                    style: "fixed",
                    position: "below"
                  },
                  footer: {
                    display: true,
                    style: "fixed",
                    position: "below"
                  },
                  mode: "fullwidth"
                }
              },
              customScrollbars: true,
              theme: {
                main: "default",
                navbar: "defaultDark",
                toolbar: "defaultDark",
                footer: "defaultDark"
              }
            }
          }
        };
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
  })
  .post("/login", function(req, res, next) {
    let Newuser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }); // this is modal object.
    User.findOne()
      .where("email")
      .equals(req.body.email)
      .where("password")
      .equals(req.body.password)
      .select("name email")
      .then(data => {
        var data = {
          role: "user",
          data: {
            displayName: data.name,
            email: data.email,
            userId: data.id,
            photoURL: "assets/images/avatars/profile.jpg",
            settings: {
              layout: {
                style: "layout1",
                config: {
                  scroll: "content",
                  navbar: {
                    display: true,
                    folded: true,
                    position: "left"
                  },
                  toolbar: {
                    display: true,
                    style: "fixed",
                    position: "below"
                  },
                  footer: {
                    display: true,
                    style: "fixed",
                    position: "below"
                  },
                  mode: "fullwidth"
                }
              },
              customScrollbars: true,
              theme: {
                main: "defaultDark",
                navbar: "defaultDark",
                toolbar: "defaultDark",
                footer: "defaultDark"
              }
            }
          }
        };
        console.log(JSON.stringify(data));
        res.json(data);
      });
  });

// connection.end();

module.exports = router;
