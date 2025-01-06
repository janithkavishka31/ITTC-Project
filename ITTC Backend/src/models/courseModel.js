const db = require('../../config/db');

const Course = {
    create : (data,callback)=>{
        const sql = 'insert into coursedetails set ?';
        db.query(sql,[data],(err,results)=>{
            if (err)return callback(err);
            callback(null,results);
        })
    },

    getAll: (callback) => { const sql = 'SELECT * FROM Coursedetails'; 
        db.query(sql, (err, results) => { 
            if (err) return callback(err); 
            callback(null, results); }); 
    },

    update: (id,data,callback)=>{
        const sql = 'UPDATE coursedetails SET ? WHERE courseid = ?';
        db.query(sql,[data,id],(err,result)=>{
            if(err)return callback(err);
            callback(null,result);
        });
    },

    delete: (id,callback)=>{
        const sql = 'DELETE FROM coursedetails WHERE courseid = ?';
        db.query(sql,[id],(err,result)=>{
            if(err)return callback(err);
            callback(null,result);
        });
    }
}

module.exports = Course;