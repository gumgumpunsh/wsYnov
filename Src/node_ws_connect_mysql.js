var mysql = require('mysql');
require('dotenv').config()


var con = mysql.createConnection({
    host: "mysql-3e01fd94-alexandre-e755.a.aivencloud.com",
    user: "avnadmin",
    password: "AVNS_VrIIz-hGYEOf-58WmGe",
    port: 12320,
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});