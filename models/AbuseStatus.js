var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var abuseStatusSchema = new Schema({
    name: String
});

var AbuseStatus = mongoose.model('AbuseStatus', abuseStatusSchema);

module.exports = AbuseStatus;