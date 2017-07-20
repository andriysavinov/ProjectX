var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sharedSchema = new Schema({
    shared_entity_id: Number,
    shared_to_user_id: Number,
    is_directory: Boolean
});

var Shared = mongoose.model('Shared', sharedSchema);

module.exports = Shared;