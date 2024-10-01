const express = require("express");
const { getFilteredProducts } = require('../../contollers/shop/productsController')



const router = express.Router();

router.get("/get", getFilteredProducts);


module.exports = router;