const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  Full_Name: {
    type: String,
    required: true,
  },
  Subject:{
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Posts", postSchema);
