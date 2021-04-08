var express = require('express');
var cookieParser = require('cookie-parser');
var flights = require('./flights/controller');

var app = express();

// übersetzt die Cookies in ein JSON-Objekt (req.cookies)
app.use(cookieParser());

//TODO: implement

app.listen(80);