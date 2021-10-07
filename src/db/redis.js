const redis = require("redis");
const { redisConfig } = require("../config/index");

const { port, host, password } = redisConfig;

const opt = {};
if (password) {
  opt.password = password;
}
const redisClient = redis.createClient(port, host, opt);
redisClient.on("error", (err) => {
  console.error("redis connect error", err);
});
// redisClient.on('connect',()=>{
//     console.log('redis connect is success')
//     redisClient.set('foo','bar',redis.print)
//     redisClient.get('foo',redis.print)
//     redisClient.quit()
// })
module.exports = redisClient;
