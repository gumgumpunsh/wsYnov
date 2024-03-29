require("node_ws_connect_postgres");

con.connect(function(err) {
    if (err) throw err;
    var sql = "CREATE TABLE ws_masks (id , address VARCHAR(255))";
    con.query(postgres, function (err, result) {
        if (err) throw err;
        console.log("Table créée !");
    });
});