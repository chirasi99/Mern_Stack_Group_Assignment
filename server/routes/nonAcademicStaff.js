const express = require("express");
const { restart } = require("nodemon");
const NonAcademicStaff = require("../models/nonAcademicStaff");
const router = express.Router();

//Create nonAcademicStaff
router.post("/nonAcademicStaff/save", (req, res) => {
  let newNonAcademicStaff = new NonAcademicStaff(req.body);

  newNonAcademicStaff.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Non Academic Staff Member saved successfully",
    });
  });
});

//Read nonAcademicStaff
router.get("/nonAcademicStaff", (req, res) => {
    NonAcademicStaff.find().exec((err, nonAcademicStaff) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingNonAcademicStaff: nonAcademicStaff,
    });
  });
});

//Delete nonAcademicStaff
router.delete("/nonAcademicStaff/delete/:id", (req, res) => {
    NonAcademicStaff.findByIdAndRemove(req.params.id).exec((err, deletedNonAcademicStaff) => {
    if (err) {
      return res.status(400).json({
        message: "Delete unsuccessful",
        err,
      });
    }
    return res.json({
      message: "Delete Successfull",
      deletedNonAcademicStaff,
    });
  });
});

//Get specific nonAcademicStaff
router.get("/nonAcademicStaff/:id", (req, res) => {
  let nonAcademicStaffId = req.params.id;

  NonAcademicStaff.findById(nonAcademicStaffId, (err, nonAcademicStaff) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      nonAcademicStaff,
    });
  });
});

//Update nonAcademicStaff
router.put("/nonAcademicStaff/update/:id", (req, res) => {
    NonAcademicStaff.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, nonAcademicStaff) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json({
        success: "Update Successfully",
      });
    }
  );
});

module.exports = router;
