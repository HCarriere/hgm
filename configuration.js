'use strict';

let config = {
    server: {
        type: getConfig('SERVER_TYPE', 'ares'),
        port: getConfig('PORT', 3000),
    },
    session: {
        secret: 'pokfe_çàe_fçsefk_o8___7392', //sshhhh. It's a secret.
    },
    database: {
        model: {
            user: 'user'
        }
    }
};


function getConfig(varEnv, defaultValue) {
    let value = process.env[varEnv];
    if(!value) {
        value = getArguments(varEnv)
    }
    if(!value) {
        if(defaultValue) {
            value = defaultValue;
        } else {
            console.error('Undefined variable : '+varEnv+'. Please setup the variable in command line arguments or environnement variable.');
            value = null;
        }
    }
    console.log(varEnv+'='+value)
    return value;
}

function getArguments(varName) {
    for(let arg of process.argv) {
        if(arg.indexOf('=') != -1) {
            let aarg = arg.split('=');
            if(varName == aarg[0]) {
                return aarg[1];
            }
        }
    }
    return null;
}

module.exports = config;