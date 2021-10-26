-- docker-compose 启动 mysql 时的初始代码
select "init start...";

--设置 root 用户可外网访问
use mysql;
SET SQL_SAFE_UPDATES=0;--解除安全模式,测试环境没关系
update user set host='%' where user='root';
flush privileges;
ALTER USER 'root'@'localhost' INDENTIFIED WITH mysql_native_password BY '123456';
flush privileges;
select "init end...";