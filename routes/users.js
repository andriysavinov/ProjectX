/*
var User = require('../controllers/user');

// API Server Endpoints
module.exports = function(app){
    app.post('/user', User.create),
    app.get('/user/:id', User.get),
    app.put('/user/:id', User.update),
    app.delete('/user/:id', User.delete)
}
*/
const User = require('../models/user');
module.exports = function(app) {
    //get all users
    app.get('/users', (req, res, next) => {
        User.find()
        .then(users => {
            res.status(200).send(users);
            next()
        })
        .catch(err => {
                res.send(500, err)
        })
    });
    //get user
    app.get('/users/:userId', (req, res, next) => {
        User.findById(req.params.local._id)
        .then(user => {
            res.send(200, user);
            next()
        })
        .catch(err => {
                res.send(500, err)
        })
    });
    //update user info
    app.put('/users/:userId', (req, res, next) => {
        let data = req.body || {},
        opts = {
            new: true
        };
        User.findByIdAndUpdate({ _id: req.params.local._id }, data, opts)
        .then(user => {
            res.send(200, user);
            next()
        })
        .catch(err => {
                res.send(500, err)
        })
    });
    //delete user
    app.delete('/users/:userId', (req, res, next) => {
        const userId = req.params.local._id;
        User.findOneAndRemove({ _id: userId })
        .then(() => {
            // remove associated directories to avoid orphaned data
    /*        Dir.deleteMany({ _id: userId })
            .then(() => {
                res.send(204);
                next()
            })
            .catch(err => {
                res.send(500, err)
            })*/
        })
        .catch(err => {
                res.send(500, err)
        })
    })
};