const express = require('express');
const router = express.Router();
const dataController = require('../controllers/controller');


router.get('/data', dataController.getData);

module.exports = router;