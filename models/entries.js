var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EntriesSchema = new Schema({
	name: String,
	author_id: String,
	page_number: Number,
	category_id: String,
	keywords: String,
});

module.exports = mongoose.model('Entries', EntriesSchema);
