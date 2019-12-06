const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const complaintSchema = Schema(
  {
    name: String,
    usn: String,
    sem: String,
    branch: String,
    gender: String,
    phoneno: String,
    email: String,
    details: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Complaint", complaintSchema);
