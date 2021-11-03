const net = require("net");
//const myObject = require("./play.js");
//console.log(myObject.setupInput);
let connection;
const setupInput = function (conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;
};
module.exports = { connect };  