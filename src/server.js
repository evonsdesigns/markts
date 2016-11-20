var express = require('express');
var app = express();
var retrieve = require('./stocks/retrieve.js');

app.get('/', function (req, res) {
    if(req.query.stock) {
        console.log('looking up stock', req.query.stock);
        
        retrieve(req.query.stock).then(function(data) {
            res.send(data);
        });
    }
});

app.listen(8080);
