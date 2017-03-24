
var app = require('express')()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

const util = require('util')

var port = process.env.PORT || 3000

var router = require('./routes');

app.use('/', router);

app.listen(port)
console.log('It starts on port ' + port);

