
const { exec } = require('child_process');
const fs = require('fs');

function execCommand(command, errorCallback, successCallback) {


    const shell = require('shelljs');
    shell.exec(command, { silent: true }, function (code, stdout, stderr) {

        if (stderr) {
            // errorCallback(stderr);		
        }
        successCallback(stdout);
    });
}

const callbackLintFiles = function (response) {
    console.log(response);
};
const callBackListFiles = function (response) {
    const listFiles = response.split('\n');

    for (let i = 0; i < listFiles.length; i++) {
        if (listFiles[i]) {
            let command = `ng lint | findstr ${listFiles[i]}`; 
            execCommand(command, callbackLintFiles, callbackLintFiles);


            command = `ng lint | grep ${listFiles[i]}`; 
            execCommand(command, callbackLintFiles, callbackLintFiles);
        }
    }
};
const cmd = 'git diff --name-only --cached';
execCommand(cmd, callBackListFiles, callBackListFiles);