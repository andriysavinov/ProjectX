const mongoose   = require('mongoose'),
      Schema     = mongoose.Schema,
      bcrypt     = require('bcrypt-nodejs'),
      timestamps = require('mongoose-timestamp');

// define the schema for our user model
const userSchema = new Schema({
        first_name: String,
        last_name: String,
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role_id: { type: Number, required: true },
        age: Number,
        avatar: String,
        facebook: String
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.plugin(timestamps);

// create the model for users and expose it to our app
const User = mongoose.model('User', userSchema);
module.exports = User;

