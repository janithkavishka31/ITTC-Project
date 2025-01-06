const express = require('express');
const router = express.Router();
const moduleController = require('../controllers/moduleController');

router.post('/', moduleController.createModule);
router.put('/:id', moduleController.updateModule);
router.delete('/:id', moduleController.deleteModule);
router.get('/', moduleController.getAllModules);

module.exports = router;

