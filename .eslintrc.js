module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ["prettier"],
  rules: {
    "no-unused-vars": 0,
    "no-console": 0,
    "max-classes-pre-file": 0,
    "no-empty-function": 0,
  },
};
