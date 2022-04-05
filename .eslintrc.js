/*
 * @Author: t_winkjqzhang
 * @Date: 2022-04-02 14:14:13
 * @LastEditTime: 2022-04-02 14:17:23
 * @Description: Do not edit
 */
// .eslintrc.js
const eslintrc = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  include: [
    // ...
    "babel.config.js",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"], // Your TypeScript files extension

      // As mentioned in the comments, you should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],

      parserOptions: {
        project: ["./tsconfig.json"], // Specify it only for TypeScript files
      },
    },
  ],
  extends: [
    "eslint:recommended", // eslint 推荐规则
    "plugin:@typescript-eslint/recommended", // ts 推荐规则
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    project: "./tsconfig.eslint.json",
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {}, // 自定义
};

module.exports = eslintrc;
