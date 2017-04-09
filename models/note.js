var BonfireMongo = require('../bonfire').BonfireMongo;

var Schema = BonfireMongo.Schema;

var NoteSchema = new Schema({
	entry_id: String,
	note: String,
	created_at: Date
});

module.exports = BonfireMongo.model('Note', NoteSchema);
