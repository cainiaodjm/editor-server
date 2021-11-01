const ENV = process.env.NODE_ENV || "";
console.log(`当前环境为${ENV}`);
module.exports = {
  ENV,
  isProd: ENV === "production",
  isProdDev: ENV === "prd_dev",
  isDev: ENV === "dev",
  isTest: ENV.indexOf("test") === 0,
  isTestLocal: ENV === "test_local",
  isTestRemote: ENV === "test_remote",
};
