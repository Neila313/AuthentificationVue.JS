const mySql = require('mysql2');
 


const con = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Bouzalmad313',
    database: 'autdb'
});

module.exports = con



