require("node_ws_connect_mysql");

con.connect(function(err) {
    if (err) throw err;
    var sql = "CREATE TABLE ws_masks (id , address VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table créée !");
    });
});