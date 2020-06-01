"use strict";
const { spawn } = require('child_process');
const deasync = require("deasync");

const process = (obj, globalData) => {
    let ret = false;
    var _obj = obj.node["kalpa-execa"];
    let result = {};
    const subprocess = spawn(_obj.cmd, _obj.opts);
    const _stderr = ((obj.ctx.stderrCallback === undefined) || (obj.ctx.stderrCallback === null)) ? false : true
    if (_stderr) {
        subprocess.stderr.on('data', obj.ctx.stderrCallback)
    }
    const _stdout = ((obj.ctx.stdoutCallback === undefined) || (obj.ctx.stdoutCallback === null)) ? false : true
    if (_stdout) {
        subprocess.stdout.on('data', obj.ctx.stdoutCallback)
    }

    subprocess.on('close', (code) => {
        result = code;
        ret = true;
    });

    while (ret !== true) {
        deasync.sleep(25);
    }
    return result
};

exports.process = process;
