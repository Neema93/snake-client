const net = require("net");
//const myObject = require("./play.js");
//console.log(myObject.connect);
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
    if (e.keyCode) keycode=e.keyCode;
    else keycode=e.which;
    ch=String.fromCharCode(keycode);
    if(ch=='a' || ch=='A') { 
      conn.on("Move: up" ,()=>{
        console.log("move up one square (unless facing down)");
      });;
    }
    else if(ch=='d' || ch=='D') {   
        conn.on("Move: down" ,()=>{
            console.log("move down one square (unless facing up)");
          });
    }
    else if(ch=='w' || ch=='W') {
        conn.on("Move: right" ,()=>{
            console.log("move right one square (unless facing left)");
          });
    }
    else if(ch=='s' || ch=='S') {
        conn.on("Move: left" ,()=>{
            console.log("move left one square (unless facing right)");
         });
    }
    
    
    
  
    setTimeout(() => {
      conn.end();
    },50);
    return conn;
  };
  module.exports = { connect };  