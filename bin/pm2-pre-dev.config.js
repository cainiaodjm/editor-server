
const appConfig  = require('./pm2AppConfig')
appConfig.instances =1
module.exports = {
    apps:[
        appConfig
    ]
   
}
