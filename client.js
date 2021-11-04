const net = require("net");
const { IP , PORT } = require("./constants.js");
//const myObject = require("./play.js");
//console.log(myObject.connect);
const connect = function () {
    const conn = net.createConnection({
      IP,
      host:"165.227.47.243", // IP address here,
      port:PORT // PORT number here,
    });
    // interpret incoming data as text
    conn.setEncoding("utf8");
    conn.on("connect", () => {
        // code that does something when the connection is first established
        console.log("connected")
    });
    conn.on("error",err => {
      console.log(err.message);
    });
    conn.on("end",() => {
      console.log("disconnected")
      process.exit();
    });
    
    return conn;
  };
  module.exports = {connect};  