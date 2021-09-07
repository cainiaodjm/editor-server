const router = require('koa-router')()
const testMysqlConn = require('../db/mysql2') 
const packageInfo  = require('../../package.json')
const ENV = require('../utils/env')
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})
router.get('/api/db-check', async ctx=>{
  //测试mysql 连接
  const mysqlRows = await testMysqlConn()
  ctx.body = {
    errno:0,
    data:{
      name:'ediotr_server',
      version:packageInfo.version,
      ENV,
      mysqlConn:mysqlRows.length>0
    }
  }
})
module.exports = router
