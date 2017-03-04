var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var QuotesSchema = new Schema({
	entry_id: String,
	quote: String,
	created_at: Date
});

module.exports = mongoose.model('Quotes', QuotesSchema);
