const express = require("express");

const { searchProducts } = require("../../contollers/shop/searchController");

const router = express.Router();

router.get("/:keyword", searchProducts);

module.exports = router;
