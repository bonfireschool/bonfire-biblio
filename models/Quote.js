var BonfireMongo = require('../bonfire').BonfireMongo;

var Schema = BonfireMongo.Schema;

var QuoteSchema = new Schema({
	entry_id: String,
	quote: String,
	created_at: Date
});

module.exports = BonfireMongo.model('Quotes', QuoteSchema);
