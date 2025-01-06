const Module = require('../models/moduleModel');

exports.getAllModules = (req,res)=>{
    Module.getAll((err,modules)=>{
        if(err)return res.status(500).json({error:err.message});
        res.json(modules);
    });
};

exports.createModule = (req,res)=>{
    const newModule = req.body;
    Module.create(newModule,(err,module)=>{
        if(err)return res.status(500).json({error:err.message});
        res.status(201).json(module);
    });
};

exports.updateModule = (req,res)=>{
    const id = req.params.id;
    const updatedData = req.body;
    Module.update(id,updatedData,(err,result)=>{
        if(err)return res.status(500).json({error:err.message});
        res.json({message:'Module updated successfully',result});
    });
};

exports.deleteModule = (req,res)=>{
    const id = req.params.id;
    Module.delete(id,(err,result)=>{
        if(err)return res.status(500).json({error:err.message});
        res.json({message:'Module deleted successfully',result});
    });
};