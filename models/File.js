var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fileSchema = new Schema({
    name: String,
    description: String,
    user_id: { type: String, required: true, unique: true },
    directory_id: { type: String, required: true, unique: true },
    extension_id: { type: String, required: true, unique: true },
    is_public: { type: String, required: true },
    created_at: Date,
    last_download_at: Date,
    updated_at: Date
});

var File = mongoose.model('File', fileSchema);

module.exports = File;