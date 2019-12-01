var express = require("express");
var router = express.Router();
var Complaints = require("./schema/Complaints");

var mongoose = require("mongoose");
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
  .put("/", function(req, res, next) {
    let NewComplaint = new Complaints(req.body); // this is modal object.
    NewComplaint.save()
      .then(data => {
        console.log(data);
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
  })
  .get("/", function(req, res, next) {
    Complaints.find()
      .then(data => {
        console.log(data);
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
  })
  .delete("/", function(req, res, next) {
    Complaints.remove({ postId: req.body.postId, userId: req.body.userId })
      .then(data => {
        console.log(data);
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
  });
// connection.end();

module.exports = router;
