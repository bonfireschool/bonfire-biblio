
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

var port = process.env.PORT || 3000

var router = express.Router()

router.use(function(res, req, next) {
    console.log("Access")
    next()
})


// Our routes
router.get('/', function(req, res) {
    res.json({ message: 'Test this.' })
})

app.use('/api', router);

app.listen(port)
console.log('It starts on port ' + port);

