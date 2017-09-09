'use strict';

function setup(app) {
    // init
    
    
    // middlewares
    
    
    // routes
    app
    .get('/', (req, res) => {
        res.render('error', {
            errorCode:'ares',
        });
    })
    
}

module.exports = setup;