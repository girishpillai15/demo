// REQUIRE
var express = require('express');
var app = express();
var mongo = require('mongodb').MongoClient;
var assert = require('assert');
var bodyParser = require('body-parser');
var cors = require('cors');
var ObjectID = require('mongodb').ObjectID;
var jwt = require('jsonwebtoken');
var moment = require('moment');
var server = require('express');
var multer = require('multer');
var readXlsxFile = require('read-excel-file/node');
var path = require('path');
var fs = require('fs');
var schedule = require('node-schedule');
var request = require('request');
//ROUTES

var adminroute = require('./routes/v1/admin_route');
var gmail = require('./config/gmail_config');
var dbb = require('./config/collections');

//Configuring Port
app.set('port', (process.env.PORT || 8008));
app.use(cors());
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.get('/', function (req, res) {
    res.send("WELCOME TO JUICED API'S");
});


//CHANGE PROD TO FALSE IF YOU WANT TO RUN THE

//APP ON THE LOCAL MACHINE
var prod = true;
var db;

if (prod) {
    var prod_url = require('./config/database');
    url = prod_url;
}

//Mongo Connection
mongo.connect(url, { useNewUrlParser: true }, function (err, database) {
    assert.equal(null, err);
    db = database;

    //JWT token authorization function
    function ensureAuthorized(req, res, next) {
        var bearerToken;
        var bearerHeader = 'Bearer ' + req.headers["user-token"];
        if (typeof bearerHeader !== 'undefined') {
            var bearer = bearerHeader.split(" ");
            bearerToken = bearer[1];
            req.token = bearerToken;
            next();
        } else {
            res.send(403);
        }
    }

    // node scheduler

    // var nodeScheduler = schedule.scheduleJob('10 * * * * *', function(){
    //     request.post(
    //         'http://localhost:8008/v1/check_license',
    //         { json: {} },
    //         function (error, response, body) {
    //             if (!error && response.statusCode == 200) {
    //                 console.log(body);
    //             }
    //         }
    //     );
    //     request.post(
    //         'http://localhost:8008/v1/expire_license',
    //         { json: {} },
    //         function (error, response, body) {
    //             if (!error && response.statusCode == 200) {
    //                 console.log(body);
    //             }
    //         }
    //     );
    //     request.post(
    //         'http://localhost:8008/v1/check_license_mp',
    //         { json: {} },
    //         function (error, response, body) {
    //             if (!error && response.statusCode == 200) {
    //                 console.log(body);
    //             }
    //         }
    //     );
    //     request.post(
    //         'http://localhost:8008/v1/expire_license_mp',
    //         { json: {} },
    //         function (error, response, body) {
    //             if (!error && response.statusCode == 200) {
    //                 console.log(body);
    //             }
    //         }
    //     );
    //   });

    //Configuring Routes
    adminroute.configure(app, ensureAuthorized, db);
    app.listen(app.get('port'), function () {
        console.log('Node app is running on port', app.get('port'));
    });
})
app.get('/v1/test', function (req, res) {
    res.send("WELCOME TO v1 test 01");
});


module.exports = server










