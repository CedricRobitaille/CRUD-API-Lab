const mongoose = require("mongoose");

const applicationSchema = mongoose.Schema({
  company: String,
  position: String,
  status: {
    type: String,
    enum: ["Applied", "Interview", "Offer", "Rejected", "Accepted"],
    default: "Applied"
  },
  notes: String,
})

const Application = mongoose.model("Application", applicationSchema);
module.exports = Application;