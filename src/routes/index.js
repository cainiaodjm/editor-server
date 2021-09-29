const router = require('koa-router')()
const testMysqlConn = require('../db/mysql2') 
const packageInfo  = require('../../package.json')
const ENV = require('../utils/env')
const {WorkModel} = require('../models/WorkModel')
const {cacheGet,cacheSet}= require('../cache/index')
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
  //测试mongodb连接
  let mongodbConn
  try {
    mongodbConn=true
    await WorkModel.findOne()
  } catch (error) {
    mongodbConn=false
  }
  //测试redis连接
  cacheSet('test','biz editor server Ok - by redis')
  const redisTestVal = await cacheGet('test')
  console.log(redisTestVal)
  ctx.body = {
    errno:0,
    data:{
      name:'ediotr_server',
      version:packageInfo.version,
      ENV,
      mysqlConn:mysqlRows.length>0,
      mongodbConn,
      redisConn:redisTestVal 
    }
  }
})
module.exports = router
