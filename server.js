var express = require("express");
var port = 3000 | process.env.PORT;
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Data = require("./model.js");

var connection = mongoose.connect('mongodb://localhost/vganalyses', { useMongoClient: true }, function(err) {
    if(err) {
      console.log(err);
      throw err;
    }
});
connection.on("open", function() {
    console.log("succesfully connected to database on localhost");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post("/api/addUser", function(req, res) {
    new Data({
        "name": req.body.name
    });
    Data.save(function(err) {
        if(err) throw err;
    });
});

app.get("/api/count", function(err, res) {
    Data.find({}, function(err, data) {
        console.log(data.length);
    });
});

app.listen(port, function(err) {
    if(err) throw err;
    console.log("connected to port: "+port);
});