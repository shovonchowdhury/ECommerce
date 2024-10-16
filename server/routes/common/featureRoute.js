const express = require("express");

const {
  addFeatureImage,
  getFeatureImages,
} = require("../../contollers/common/featureController");

const router = express.Router();

router.post("/add", addFeatureImage);
router.get("/get", getFeatureImages);

module.exports = router;