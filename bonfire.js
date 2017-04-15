var BonfireMongo = require('mongoose');
BonfireMongo.connect('mongodb://bonfire:bonfire@ds149049.mlab.com:49049/bonfire');

module.exports.BonfireMongo = BonfireMongo;

