const Sequelize = require('sequelize');
const {devConfig} = require('../../config');
const { isTest, isProd } = require('../../utils/env');


const {database,user,password,host,port} = devConfig


const conf = {
    host,
    port,
    dialect:'mysql'
}
//测试环境不打印日志
if(isTest){
    conf.logging = ()=>{}
}

if(isProd){
    conf.pool = {
        max:5,
        min:0,
        idle:1000,//如果一个线程10秒钟内没有被使用过的话,那么就释放线程
    }
}

//创建连接
const sequelize = new Sequelize(database,user,password,conf)
module.exports = sequelize 