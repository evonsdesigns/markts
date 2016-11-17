var request = require('request');

request.post("http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=CYS", {
        json: true
    },
    function (err, res, body) {
        if (!err && res.statusCode === 200) {
            console.log(body.Name + ' closed at ' + body.LastPrice + ' with a high of ' + body.High);
            console.log('Total Volume was ' + body.Volume + ' for the day.');
        }
    }
);