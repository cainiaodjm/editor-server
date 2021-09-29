/**
 * 同步数据库,以修改数据表的方式,不会清空数据 比较安全
 */


const path = require('path')
const simpleGit  = require('simple-git')
const { isDev } = require('../../../utils/env')
const sequelize = require('../seq')


//获取所有sequelize model
const controllers = require('require-all')({
    dirname:path.resolve('src','models'),
    filter:/\.js$/,
    excludeDirs:/^\.(git||svn)$/,
    recursive:true
})
//同步数据表

async function syncDb(){
    let needToSyncDb = true

    //只适用于开发环境
    
    if(isDev){

        //开发环境，修改频繁，每次重启都同步数据库，消耗太大
        //所以，开发环境下，判断是否修改了 src/modeles 中的内容？
        //如果是 则同步数据库，否则 不同步数据库
        const git = simpleGit()
        //获取 git status 修改的文件，modified格式如 ['.gitignore']
        const status = await git.status()
       
        const {modified,not_added:notAdded,created,deleted,renamed} = status
        const fileChanged = modified.concat(notAdded).concat(created).concat(deleted).concat(renamed)
        //
       
        if(fileChanged.length>0){
            //说明 git status 有改动
            //是否改动了 db 相关的文件
            const changedDbFiles = fileChanged.some(f=>{
                //改动了 src/modles 需要同步数据库
                if(f.indexOf('src/models/')===0) return true
                //改动了 src/db/seq
                if(f.indexOf('src/db/seq/')===0) return true

                return false
            })
            //changedDbFiles 为false 则没有改动models或者db 则不需要同步数据库
            if(!changedDbFiles)  needToSyncDb=false
        }
        //如果git status 没有改动 则照常同步数据库
    }
   
    if(needToSyncDb){
        await sequelize.sync({alter:true})
    }

}

module.exports = syncDb