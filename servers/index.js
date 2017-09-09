'use strict';

const ares = require('./ares');
const matrix = require('./matrix');
const palpatine = require('./palpatine');

function setupServers(app, serverType) {
    switch(serverType) {
        case 'ares':
            ares(app);
            break;
        case 'matrix':
            matrix(app);
            break;
        case 'palpatine':
            palpatine(app);
            break;
        default:
            console.error('ERROR : '+serverType+' is not a valid server type.');            
    }
}

module.exports = {
    setupServers,
};