var BonfireMongo = require('../bonfire').BonfireMongo;

var Schema = BonfireMongo.Schema;

var EntrySchema = new Schema({
	name: String,
	author_id: String,
	page_number: Number,
	category_id: String,
	keywords: String,
});

module.exports = BonfireMongo.model('Entry', EntrySchema);
