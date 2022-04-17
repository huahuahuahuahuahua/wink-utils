/*
 * @Author: t_winkjqzhang
 * @Date: 2022-04-02 14:42:16
 * @LastEditTime: 2022-04-17 14:33:18
 * @Description: Do not edit
 */
// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  // testRegex: "cloneDeep.test.ts",
};
// //
// const fs = require("fs");
// const gulp = require("gulp");
// const { exec } = require("child_process");
// const clean = require("gulp-clean");
// const typedoc = require("gulp-typedoc");
// const pkg = require("./package.json");
// const conventionalChangelog = require("conventional-changelog");
// const { resolve } = require("path");
// let addEsmMiddle = (str) => {
//   return str.split(".").join(".esm.");
// };
// let inputFileNameNoExtList = pkg._need_handle_files;

// // /** type doc 任务 */
// const {
//   build,
//   taskJestTest,
//   taskeslint,
//   taskBuildTsProject,
//   taskchangelog,
//   taskBuildUmdEsm,
// } = require("./scripts/build");

// // const {
// //   buildTypes,
// //   taskCleanTypes,
// //   taskOutputTypes,
// //   taskCleanTypesDirUnuseFile,
// // } = require("./scripts/buildTypes");
// // const {
// //   taskUpdateVersion,
// //   taskPublish,
// //   publish,
// // } = require("./scripts/publish");
// // const {
// //   taskCleanTypedoc,
// //   taskOutputTypedoc,
// //   taskOutputReadme,
// //   taskTypedoc,
// //   doc,
// // } = require("./scripts/doc");
// // const { taskDev } = require("./scripts/taskDev");
// // const taskTypedoc = taskTypedoc; //taskOutputTypedoc
// /** 调试 */
// // exports.doc = doc;
// // exports.buildTypes = buildTypes;
// // exports.build = build;
// exports.taskBuildUmdEsm = taskBuildUmdEsm;
// // exports.taskOutputTypes = taskOutputTypes;
// // exports.taskBuildTsProject = taskBuildTsProject;
// // exports.publish = publish;
// // exports.taskUpdateVersion = taskUpdateVersion;
// // exports.taskJestTest = taskJestTest;
// // exports.changelog = taskchangelog;
// exports.dev = gulp.watch(["../src/*.ts"], taskBuildUmdEsm);
// // exports.default = (cb) => cb();
