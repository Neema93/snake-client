const myObject = require("./play.js");
console.log(myObject.connect);
const connect = function () {
    const conn = net.createConnection({
      Name: "NMP", 
      host:"10.0.0.159", // IP address here,
      port:50541 // PORT number here,
    });
    // interpret incoming data as text
    conn.setEncoding("utf8");
    //conn.on("event name", functionThatDoesSomething);
    conn.on("event name", () => {
    // code that does something
      console.log("hellooooo")
    });
    conn.on("connect", () => {
        // code that does something when the connection is first established
        console.log("connected")
    });
    conn.on("Name",(Name)=>{
        console.log("Name:", Name)
    });
    conn.on("Move: up" ,()=>{
      console.log("move up one square (unless facing down)");
    });
    conn.on("Move: down" ,()=>{
      console.log("move down one square (unless facing up)");
    });
    conn.on("Move: right" ,()=>{
      console.log("move right one square (unless facing left)");
    });
    conn.on("Move: left" ,()=>{
      console.log("move left one square (unless facing right)");
    });
    setTimeout(() => {
      conn.end();
    },50);
    return conn;
  };
  module.exports = { connect };  