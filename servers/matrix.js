'use strict';

let users = require('../app/users');


function setup(app) {
    // init
    
    
    // middlewares
    
    
    // routes
    app
    .get('/', (req, res) => {
        res.json({message:'Matrix ! '});
    })
    
    .get('/api/users', (req, res) => {
        users.getUsers(req, (data) => {
            res.json(data);
        });
    })
    
    .post('/api/user', (req, res) => {
        users.createUser(req, (err) => {
            res.json({message: 'created', error: err});
        });
    })
}

module.exports = setup;