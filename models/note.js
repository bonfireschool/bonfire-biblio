var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var NoteSchema = new Schema({
	entry_id: String,
	note: String,
	created_at: Date
});

module.exports = mongoose.model('Note', NoteSchema);
