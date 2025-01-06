const express = require('express');
const router = express.Router();
const examResultController = require('../controllers/examResultController');

router.post('/', examResultController.createExamResult);
router.get('/', examResultController.getAllExamResults);
router.put('/:studentId/:moduleCode', examResultController.updateExamResult);
router.delete('/:studentId/:moduleCode', examResultController.deleteExamResult);

module.exports = router;
