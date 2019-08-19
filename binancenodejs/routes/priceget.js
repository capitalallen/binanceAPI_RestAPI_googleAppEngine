const express = require('express');
const priceController = require('../controller/getprice');
const router = express.Router();

// GET /feed/posts
router.get('/idiot',priceController.returnPrice);
module.exports = router;
