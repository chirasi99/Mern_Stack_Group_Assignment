const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
//import routes
const postRoutes = require("./routes/posts");
const nonAcademicStaffRoutes = require("./routes/nonAcademicStaff");

//app middleware
app.use(bodyParser.json());
app.use(cors());

app.use(postRoutes);
app.use(nonAcademicStaffRoutes);
const PORT = 8000;
const DB_URL =
  "mongodb+srv://user1:user1@mernapp.awkqwf2.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("DB Connected");
  })

  .catch((err) => {
    console.log("DB connection error!", err);
  });

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
