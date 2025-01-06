const db = require('../../config/db');


const ExamResult = {
    create: (data, callback) => {
        const sql = 'insert into studentexamresult set ?';
        db.query(sql, [data], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },

    getAll: (callback) => {
        const sql = 'select * from studentexamresult';
        db.query(sql, (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },

    update: (id, data, callback) => {
        const sql = 'update studentexamresult set ? where studentid = ? and modulecode = ?';
        db.query(sql, [data, id], (err, result) => {
            if (err) return callback(err);
            callback(null, result);
        });
    },

    delete: (id, callback) => {
        const sql = 'delete from studentexamresult where studentid = ? and modulecode = ?';
        db.query(sql, [id], (err, result) => {
            if (err) return callback(err);
            callback(null, result);
        });
    }
};

module.exports = ExamResult;
