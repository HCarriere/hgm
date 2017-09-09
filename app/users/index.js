'use strict';

let User = require('./schema');
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hgm'); // connect to our database

function createUser(req, callback) {
    console.log('creating user...');
    
    let user = new User();
    user.email = req.body.email;
    
    user.save((err) => {
        console.log('user created');
        callback(err);
    });
}

function getUsers(req, callback) {
    console.log('getting users...')
    User.find({}).exec((data) => {
        callback(data);
    });
}

module.exports = {
    createUser,
    getUsers,
};