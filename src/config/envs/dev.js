
const dotenv = require('dotenv')
const path = require('path')
const envName = process.env.NODE_ENV || 'dev'
const envPath = path.resolve(__dirname,`../../../.env.${envName}`)
const result = dotenv.config({path:envPath})
let config =null
if(result.error){
    config = {}
}else{
    config=result.parsed
}

module.exports  = {
    mysqlConfig : {
        host:config.MYSQL_HOST,
        user:config.MYSQL_PORT,
        password:config.MYSQL_PASSWORD,
        port:config.MYSQL_PORT,
        database:config.MYSQL_DATABASE
    },
    mongodbConf:{
        host:config.MONGODB_HOST,
        port:config.MONGODB_PORT,
        dbName:config.MONGODB_DATABASE
    },
    redisConfig:{
        port:config.REDIS_PORT,
        host:config.REDIS_HOST,
    }
}