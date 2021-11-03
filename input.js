const net = require("net");
//const myObject = require("./play.js");
//console.log(myObject.setupInput);
const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;
};
module.exports = { connect };  