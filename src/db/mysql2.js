// mysql2连接测试
const mysql = require("mysql2/promise");
const { mysqlConfig } = require("../config/index");
const { isProd, isTest } = require("../utils/env");

console.log(process.env.NODE_ENV);

// eslint-disable-next-line consistent-return
async function testMysqlConn() {
  try {
    const testConfig = {
      host: "localhost",
      user: "root",
      password: "123456",
      database: "editor_server",
    };

    console.log(mysqlConfig, "=======");
    const connection = await mysql.createConnection(mysqlConfig);

    const [rows] = await connection.execute("select now();");
    return rows;
  } catch (error) {
    console.log(error);
  }
}

// 可以直接执行 node src/db/mysql2.js 进行测试

// ;(async ()=>{
//     const rows = await testMysqlConn()
//     console.log(rows) //[ BinaryRow { 'now()': 2021-09-07T17:33:27.000Z } ]
// })()
module.exports = testMysqlConn;
