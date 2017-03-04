var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorsSchema = new Schema({
	_id: String,
	name: String,
	contact: { 
		email: String,
		cell_phone: String,
		website: String,
		address: String,
	},
});


module.exports = mongoose.model('Authors', AuthorsSchema);
