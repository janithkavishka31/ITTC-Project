const ExamResult = require('../models/examResultModel');

exports.createExamResult = (req, res) => {
    const newExamResult = req.body;
    ExamResult.create(newExamResult, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json(result);
    });
};

exports.getAllExamResults = (req, res) => {
    ExamResult.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.updateExamResult = (req, res) => {
    const { studentId, moduleCode } = req.params;
    const updatedData = req.body;
    ExamResult.update({ studentId, moduleCode }, updatedData, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Exam result updated successfully', result });
    });
};

exports.deleteExamResult = (req, res) => {
    const { studentId, moduleCode } = req.params;
    ExamResult.delete({ studentId, moduleCode }, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Exam result deleted successfully', result });
    });
};
