const  config = require('./envs/dev')
module.exports ={
   mysqlConfig:config.mysqlConfig,
   mongodbConf:config.mongodbConf,
   redisConfig:config.redisConfig

}