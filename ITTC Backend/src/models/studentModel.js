const db = require('../../config/db');

const Student ={
    getAll: (callback)=>{
        const sql = 'SELECT * FROM studentdetails';
        db.query(sql,(err,results)=>{
            if(err) return callback(err);
            callback(null,results);
        });
    },

    getById: (id,callback)=>{
        const sql = 'SELECT * FROM studentdetails WHERE studentid=?';
        db.query(sql,[id],(err,results)=>{
            if(err) return callback(err);
            callback(null,results[0]);
        });
    },

    create : (data, callback)=>{
        console.log('Attempting to create student with data:', data);
        const sql = 'INSERT INTO studentdetails SET ?';
        db.query(sql, [data], (err,results)=>{
            if(err) {
                console.error('Database error:', err);
                return callback(err);
            }
            console.log('Database response:', results);
            callback(null,results);
        });
    },

    update: (id, data, callback) => { 
        const sql = 'UPDATE StudentDetails SET ? WHERE StudentId = ?';
        db.query(sql, [data, id], (err, result) => { 
            if (err) return callback(err); 
            callback(null, result); 
        }); 
    },

    delete: (id, callback) => { 
        const sql = 'DELETE FROM StudentDetails WHERE StudentId = ?'; 
        db.query(sql, [id], (err, result) => { 
            if (err) return callback(err); 
            callback(null, result); 
        }); 
    }
};

module.exports=Student;