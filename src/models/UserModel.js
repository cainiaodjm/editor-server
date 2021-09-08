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
    }
})
module.exports = User