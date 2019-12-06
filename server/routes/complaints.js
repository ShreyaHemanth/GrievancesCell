var express = require("express");
var router = express.Router();
var Complaints = require("./schema/Complaints");

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
