var BonfireMongo = require('../bonfire').BonfireMongo;

var Schema = BonfireMongo.Schema;

var CategorySchema = new Schema({
	_id: String,
	name: String
});

module.exports = BonfireMongo.model('Category', CategorySchema);
