
# syntax=docker/dockerfile:1
FROM node:14
#自定义的工作目录 在容器中 
WORKDIR /app
#拷贝当前所有文件到 /app 可以在.dockerIgnore 中设置需要忽略的文件和目录
COPY . /app


#构建镜像时 一般用于做一些系统配置 安装必备的软件 可有多个Run
#设置时区

RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia Shanghai'

#设置npm 镜像源
RUN npm set registry https://registry.npm.taobao.org

#安装
RUN npm install

#启动容器时 只能有一个CMD 需要一个阻塞控制台的命令 
CMD npm run prd-dev && npx pm2 log
# CMD npm run dev && npx pm2 log
#环境变量

ENV SERVER_NAME="editor-server"
ENV AUTHOR_NAME="cainiaodjm"
