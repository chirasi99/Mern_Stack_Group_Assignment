const mongoose = require("mongoose");
const nonAcademicStaffSchema = new mongoose.Schema({
  Full_Name: {
    type: String,
    required: true,
  },
  Position:{
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("NonAcademicStaff", nonAcademicStaffSchema);