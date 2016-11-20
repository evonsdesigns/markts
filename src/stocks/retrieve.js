var request = require('request');

function retrieve(ticker) {
    return new Promise(function (resolve, reject) {
        request.post("http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=" + ticker, {
                json: true
            },
            function (err, res, body) {
                if (!err && res.statusCode === 200) {
                    resolve(body);
                } else {
                    console.log("error ", res.statusCode);
                    reject(body);
                }
            }
        )
    });
}

module.exports = retrieve;