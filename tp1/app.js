var express = require("express");
var app = express();


app.set('engine view', 'ejs');


app.get("/", function(req, res){
    res.render('index.ejs',{liste : ["Hocine", "Yazid", "Tedy", "Xavier", "Marie"]} );
});

app.get("/profile/:nom", function(req, res){
    res.render("profile.ejs", {nom : req.params.nom});
});

app.listen(3000, function(){
    console.log("URL serveur : http://localhost:3000");
});