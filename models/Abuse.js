var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var abuseSchema = new Schema({
    file_id: Number,
    description: String,
    status_id: Number,
    created_at: Date
});

var Abuse = mongoose.model('Abuse', abuseSchema);

module.exports = Abuse;