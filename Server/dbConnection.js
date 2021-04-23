var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit:10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testing'
});
pool.getConnection((err, connection) => {    
    if (err) throw err 
    if (connection) connection.release()    
    return console.log('WELCOME TO EXPRESS SERVER');
})
module.exports = pool