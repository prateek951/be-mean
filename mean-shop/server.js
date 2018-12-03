var express = require("express");
var session = require('express-session');
var app = express();
app.use(express.static('public'));

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.post('/register', function (request, response) {
    var dbOperation = require("./crudOperation");
    var data = request.body;
    console.log("Data is... ", data);
    dbOperation.addUser(data, response);
});
app.post('/check', function (request, response) {
    var dbOperation = require("./crudOperation");
    var data = request.body;
    console.log("Data is... ", data);
    dbOperation.findUser(data, response);
});

app.post('/login', function (request, response) {
    var dbOperation = require("./crudOperation");
    var data = request.body;
    console.log("Data is... ", data);
    dbOperation.findUser(data, response);
});

app.listen(1234, function () {
    console.log("server start");
});