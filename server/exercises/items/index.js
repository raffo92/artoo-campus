const express = require('express');
const controller = require('./items.controller.js')();
const router = express.Router();

router.get('/', require("../middlewares/mean"),controller.query);
router.post('/', controller.save);

module.exports = {
  name: 'Items',
  router: router,
  version: '1.0.0',
};