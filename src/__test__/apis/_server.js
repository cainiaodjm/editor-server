const axios = require('axios')
let TOKEN=''


module.exports= {
    setToken(token){
        console.log('setToken',token)
        TOKEN=token
    }
}