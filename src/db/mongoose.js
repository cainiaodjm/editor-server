const mongoose = require('mongoose')
const {mongodbConf} = require('../config/index')

const {host,port,dbName,user,password} = mongodbConf

//拼接连接字符串
let url = `mongodb://${host}:${port}` //dev环境
const options  ={
    dbName:dbName,
    autoIndex: false, // Don't build indexes
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6
}

if(user && password){
    url = `mongodb://${user}:${password}@${host}:${port}` //生产环境
    options.authSource = "admin"
}

mongoose.connect(url,options).then(()=>{
    console.log(`${url} is connect for mongodb`)
}).catch(err=>{ 
    console.log(err)
})
module.exports = mongoose 
