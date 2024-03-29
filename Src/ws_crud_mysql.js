const mysql = require("mysql");
const express = require("express")
const {request} = require("express");
var con = mysql.createConnection({
    host: "mysql-3e01fd94-alexandre-e755.a.aivencloud.com",
    user: "avnadmin",
    password: "AVNS_VrIIz-hGYEOf-58WmGe",
    port: 12320,
    database: "defaultdb"
});

const app =express();

app.use(express.json());

con.connect(function(err) {
    app.post("/ws_masks", async (req, res) => {
        try {
            const {name, description, mask_json} = req.body;
            con.query(`INSERT INTO ws_masks (name, description, mask_json)
                       VALUES ("test 1", "ceci est un test", "cest quoi cette colonne !?!?")`,
                [name, description, mask_json]
            );
            res.status(202).json({
                message: "Insertion réussie !",
            });
        } catch (err) {
            res.status(500).json({
                message: err,
            });
        }
    });
});

con.connect(function(err){
    app.put("/ws_masks/:id", async(req, res)=> {
        try{
            const id = request.params.id;
            const {name, description, ws_masks} = req.body;
            con.query(`UPDATE ws_masks (name, description, ws_masks) 
            VALUES ("test 2", "desc modifiée", "colonne modifiée")`,
                [name, description, ws_masks]);
        }catch (err){
            res.status(500).json({
                message: err,
            })
        }
    });
});

con.connect(function(err){
    app.delete("/ws/masks/:id", (req, res)=>{
        con.query(`DELETE FROM ws_masks WHERE id = ?`, id, (err, result)=>{
            if(err){
                console.error("Impossible de supprimer le record avec l'id "+id);
                res.status(500).send("Impossible de suuprimer le record");
                return;
            }
            res.send(result);
        });
    })
});
