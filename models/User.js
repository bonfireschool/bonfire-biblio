var BonfireMongo = require('../bonfire').BonfireMongo;

var Schema = BonfireMongo.Schema;

var UserSchema = new Schema({
	_id: String,
	authToken: String,
});


module.exports = BonfireMongo.model('Author', AuthorSchema);
