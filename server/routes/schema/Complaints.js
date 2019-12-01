const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const complaintSchema = Schema({
  name: String,
  sem: String,
  branch: String,
  gender: String,
  phoneno: String,
  email: String,
  details: String,
  createdAt: { type: Schema.Types.Date, default: Date.now() }
});

module.exports = mongoose.model("Complaint", complaintSchema);
