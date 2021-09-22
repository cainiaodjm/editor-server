const mongoose = require('mongoose')
const {mongodbConf} = require('../config/index')

const {host,port,dbName,user,password} = mongodbConf

//拼接连接字符串
let url = `mongodb://${host}:${port}` //dev环境

if(user && password){
    url = `mongodb://${user}:${password}@${host}:${port}` //生产环境
}

// //开始连接
// mongoose.connect(`${url}/${dbName}?authSource=admin`)
// const db = mongoose.connection

// db.on('error',err=>{
//     console.error('mongoose connect error',err)
// })

// // 执行node src/db/mongoose 测试连接

// db.once('open',()=>{
//     //用以测试数据连接是否成功
//     console.log('mongoose is connect success')
// })
console.log(url)
mongoose.connect(url, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useu
    autoIndex: false, // Don't build indexes
    // poolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
    
}).then(
    () => { 
        /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
        console.log('connect is success')
     },
    err => {
        
        /** handle initial connection error */
        console.log(err)
    }
  );