const course = require('../models/courseModel');

exports.createCourse = (req,res)=>{
    const newCourse = req.body;
    course.create(newCourse,(err,course)=>{
        if(err)return res.status(500).json({error:err.message});
        res.status(201).json(course);
    })
};

exports.getAllCourses = (req,res)=>{
    course.getAll((err,courses)=>{
        if(err)return res.status(500).json({error:err.message});
        res.json(courses);
    });
};

exports.updateCourse = (req,res)=>{
    const id = req.params.id;
    const updatedData = req.body;
    course.update(id,updatedData,(err,result)=>{
        if(err)return res.status(500).json({error:err.message});
        res.json({message:'Course updated successfully',result});
    });
};

exports.deleteCourse = (req,res)=>{
    const id = req.params.id;
    course.delete(id,(err,result)=>{
        if(err)return res.status(500).json({error:err.message});
        res.json({message:'Course deleted successfully',result});
    });
};

