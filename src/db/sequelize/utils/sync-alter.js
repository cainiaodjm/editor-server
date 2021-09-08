/**
 * 同步数据库,以修改数据表的方式,不会清空数据 比较安全
 */


const path = require('path')
const simpleGit  = require('simple-git')
const { isDev } = require('../../../utils/env')
const sequelize = require('../seq')


//获取所有sequelize model
require('require-all')({
    dirname:path.resolve('src','models'),
    filter:/\.js$/,
    excludeDirs:/^\.(git||svn)$/,
    recursive:true
})
//同步数据表

async function syncDb(){
    //开发环境，修改频繁，每次重启都同步数据库，消耗太大
    //所以，开发环境下，判断是否修改了 src/modeles 中的内容？
    //如果是 则同步数据库，否则 不同步数据库
}