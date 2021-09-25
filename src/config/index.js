const  dev = require('./envs/dev')
//todo 应该用 dotenv 去获取当前的env环境变量文件 去获取参数 
module.exports ={
   mysqlConfig: dev.mysqlConfig,
   mongodbConf: dev.mongodbConf,
   redisConfig:dev.redisConfig

}