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
const handleUserInput = function (key) {
    // your code here
    console.log(key);
    // conn.on("Move: up" ,()=>{
    //     console.log("move up one square (unless facing down)");
    //   });;
    //   conn.on("Move: down" ,()=>{
    //     console.log("move down one square (unless facing up)");
    //   });
    //   conn.on("Move: right" ,()=>{
    //     console.log("move right one square (unless facing left)");
    //   });
    
    //  conn.on("Move: left" ,()=>{
    //           console.log("move left one square (unless facing right)");
    //        });
      
    //setupInput();
    if(key === "\u0003"){
        process.exit();
    }
    if(key === "m"){
        connection.write("Say: Hello...")
    }
    if(key === "w"){
        connection.write("Move: up")
    }
    if(key === "a"){
        connection.write("Move: up")
    }
    if(key === "s"){
        connection.write("Move: up")
    }
    if(key === "d"){
        connection.write("Move: up")
    }
  };
module.exports = { setupInput };  