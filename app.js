var express = require('express');
var app = express();
var sass = require('node-sass');
var url = require("url");
var path = require("path");
var fs = require("fs");
var retrieve = require('./src/stocks/retrieve');

app.use(express.static(path.join(__dirname, 'public')));
app.listen(8080);

app.get('/stock', function (req, res) {
    if (req.query.ticker) {
        console.log('looking up stock', req.query.ticker);

        retrieve(req.query.ticker).then(function (data) {
            res.send(data);
        });
    } else {
        res.send('please specify a stock');
    }
});