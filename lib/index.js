"use strict";
let execa = require("execa")
const process = (obj, globalData) => {
  var _obj = obj.node["kalpa-execa"];
  try {
    execa.sync(_obj.cmd, _obj.opts);
  } catch (error) {
    //console.log(error);
    throw error
  }
};

exports.process = process;
