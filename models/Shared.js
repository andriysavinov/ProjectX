var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sharedSchema = new Schema({
    shared_entity_id: Number,
    shared_to_user_id: Number,
    is_directory: Boolean
});

sharedSchema.statics = {

    /**
     findOnecompany. return the one company object.
     @param id: get id to find one company by id.
     @param callback: callback of this form.
     */
    get: function(query, callback) {
        this.findOne(query, callback);
    },
    /**
     findcompany. return the company objects.
     @param callback: callback of this form.
     */
    getAll: function(query, callback) {
        this.find(query, callback);
    },

    /**
     updatecompany. return the create company object result.
     @param updateData: updateData is use to update company w.r.t id.
     @param callback: callback of this form.
     */
    updateById: function(id, updateData, callback) {
        this.update(id, {$set: updateData}, callback);
    },
    remove: function(removeData, callback) {
        this.remove(removeData, callback);
    },
    create: function(data, callback) {
        var user = new this(data);
        user.save(callback);
    }
}

var Shared = mongoose.model('Shared', sharedSchema);

module.exports = Shared;