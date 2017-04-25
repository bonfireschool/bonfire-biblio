
var app = require('express')()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

var port = require('./bonfire').BonfirePort;

const util = require('util')

var router = require('./routes');

app.use('/', router);

app.listen(port)
console.log('It starts on port ' + port);

