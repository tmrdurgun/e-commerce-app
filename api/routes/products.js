var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');
const produtcsModel = require('../models/products');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const products = await produtcsModel.find({}).skip(0).limit(100).sort({_id: -1});

    res.status(200).send({
      success: true,
      data: products
    })

  } catch (error) {
    console.log(`ERROR: (PRODUCT LIST) - ${error.toString()}`)
    res.status(500).send({
      success: false,
      message: 'Error ouccured when retrieving products'
    });
  }
  
});

module.exports = router;
