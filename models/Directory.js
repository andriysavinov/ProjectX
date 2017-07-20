var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var directorySchema = new Schema({
    name: String,
    description: String,
    user_id: { type: String, required: true, unique: true },
    parent_directory_id: { type: String, required: true, unique: true },
    is_public: { type: String, required: true },
    created_at: Date,
    updated_at: Date
});

var Directory = mongoose.model('Directory', directorySchema);

module.exports = Directory;