const net = require("net");

// establishes a connection with the game server
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
    })
  return conn;
};
module.exports = { connect };


console.log("Connecting ...");
connect();