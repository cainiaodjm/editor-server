
const appConfig  = require('./pm2AppConfig')
appConfig.instances =1
console.log(appConfig)
module.exports = {
    apps:[
        appConfig
    ]
   
}
