const express = require("express");

const {
  addProductReview,
  getProductReviews,
} = require("../../contollers/shop/productReviewController");

const router = express.Router();

router.post("/add", addProductReview);
router.get("/:productId", getProductReviews);

module.exports = router;