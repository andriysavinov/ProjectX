var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var timestamps = require('mongoose-timestamp');

var directorySchema = new Schema({
    name: String,
    description: String,
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        index: true,
        required: true,
    },
    parent_directory_id: { type: String, required: true, unique: true },
    is_public: { type: String, required: true }
});
directorySchema.plugin(timestamps)
var Directory = mongoose.model('Directory', directorySchema);

module.exports = Directory;