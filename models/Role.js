var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roleSchema = new Schema({
    role_name: String
});

var Role = mongoose.model('Role', roleSchema);

module.exports = Role;