var express = require('express');
var parser = require('body-parser');
var path = require('path');

var app = express();
app.set('view engine', 'ejs');
app.('/', function(req, res) {
    res.render('index');
    });
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })