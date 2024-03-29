const mysql = require("mysql");
var con = mysql.createConnection({
    host: "mysql-3e01fd94-alexandre-e755.a.aivencloud.com",
    user: "avnadmin",
    password: "AVNS_VrIIz-hGYEOf-58WmGe",
    port: 12320,
    database: "defaultdb"
});


con.connect(function(err) {
    if (err) throw err;
    var sql = "CREATE TABLE ws_masks (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(150), description VARCHAR(255), mask_json VARCHAR(250))";
    var sql1 = "CREATE TABLE ws_entries (id INT AUTO_INCREMENT PRIMARY KEY, id_mask INT, entry_json VARCHAR(255))";
    con.connect(function(err) {
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Première table créée !");
        });
        con.query(sql1, function (err, result) {
            if (err) throw err;
            console.log("Deuxième table créée !");
        });
    });
});