const sequelize = require("../db/sequelize/seq");
const {Sequelize,DataTypes} = require('sequelize')


const User = sequelize.define('user',{
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:'username',
        comment:'用户名,唯一'
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        comment:'密码'
    },
    phoneNumber:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:'username',
        comment:'用户手机号,唯一'
    },
    nickName:{
        type:DataTypes.STRING,
        comment:'昵称'
    },
    gender:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0,
        comment:'性别(1 男 2 女 0 保密)'
    },
    avatar:{
        type:DataTypes.STRING,
        comment:'头像，图片地址'
    },
    city:{
        type:DataTypes.STRING,
        comment:'城市'
    },
    latestLoginAt:{
        type:DataTypes.DATE,
        defaultValue:null,
        comment:'最后登录时间'
    },
    isFrozen:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
        comment:'用户是否被冻结'
    }


})
module.exports = User