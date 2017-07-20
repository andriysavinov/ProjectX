var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    first_name: String,
    last_name: String,
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role_id: { type: Number, required: true },
    age: Number,
    created_at: Date,
    updated_at: Date,
    avatar: String,
    facebook: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;