const axios = require("axios");
const supertest = require("supertest");

let TOKEN = "";

module.exports = {
  setToken(token) {
    console.log("setToken", token);
    TOKEN = token;
  },
};
