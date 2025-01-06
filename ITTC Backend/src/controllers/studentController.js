const Student = require('../models/studentModel');

exports.getAllStudents = (req, res) => {
    Student.getAll((err, students)=>{
        if(err) return res.status(500).json({error: err.message});
        res.json(students);
    });
};

exports.getStudentById = (req, res) => {
    const id = req.params.id;
    Student.getById(id, (err, student) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.json(student);
    });
};

exports.createStudent = (req, res) => {
    console.log('Received student data:', req.body);
    const newStudent = req.body;
    
    // Validate required fields
    if (!newStudent.FullName || !newStudent.NIC || !newStudent.MISNumber) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    Student.create(newStudent, (err, student) => {
        if (err) {
            console.error('Error creating student:', err);
            return res.status(500).json({ error: err.message });
        }
        console.log('Student created successfully:', student);
        res.status(201).json(student);
    });
};

exports.updateStudent = (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    Student.update(id, updatedData, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Student updated successfully', result });
    });
};

exports.deleteStudent = (req, res) => {
    const id = req.params.id;
    Student.delete(id, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Student deleted successfully', result });
    });
};
