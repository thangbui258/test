const http = require('http');
const mysql = require('mysql');

let con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '25081996',
    database: 'classicmodels'
});


let server = http.createServer((req, res) => {
    con.connect((err) => {
        if (err) {
            throw new Error(err.message);
        } else {
            console.log('ket noi thanh cong');
            con.query('select * from customers', (err, result) => {
                if (err) throw err;
                console.log(result);
            })
        }
    })

});
server.listen(8080);