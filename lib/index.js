"use strict";
let path = require("path")
let execPath = path.join(__dirname, "../node_modules/", "execa")
let execa = require(execPath)
const process = (obj, globalData) => {
  var _obj = obj["kalpa-execa"];
  try {
    execa.sync(_obj.cmd, _obj.opts);
  } catch (error) {
    //console.log(error);
    throw error
  }
};

exports.process = process;
