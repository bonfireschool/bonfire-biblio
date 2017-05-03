var BonfireMongo = require('../bonfire').BonfireMongo;

var Schema = BonfireMongo.Schema;

var AuthorSchema = new Schema({
	_id: String,
	name: String,
	contact: { 
		email: String,
		cell_phone: String,
		website: String,
		address: String,
	},
});


module.exports = BonfireMongo.model('Author', AuthorSchema);
