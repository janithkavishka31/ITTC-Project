const db = require('../../config/db');

const Module = {
    getAll: (callback) => {
        const sql = 'select * from coursemodule';
        db.query(sql, (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },

    create: (data, callback) => {
        // Log the incoming data and SQL query
        console.log('Creating module with data:', data);
        const sql = 'insert into coursemodule set ?';
        console.log('SQL Query:', sql);

        db.query(sql, [data], (err, results) => {
            if (err) {
                console.error('Database error:', err);
                return callback(err);
            }
            callback(null, results);
        });
    },

    update: (id, data, callback) => {
        const sql = 'update coursemodule set ? where moduleid = ?';
        db.query(sql, [data, id], (err, result) => {
            if (err) return callback(err);
            callback(null, result);
        });
    },

    delete: (id, callback) => {
        const sql = 'delete from coursemodule where moduleid = ?';
        db.query(sql, [id], (err, result) => {
            if (err) return callback(err);
            callback(null, result);
        });
    }
};

module.exports = Module;
