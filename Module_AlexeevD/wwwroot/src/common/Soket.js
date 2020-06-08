//import io from 'socket.io-client';

//const socket = io.connect('https://localhost:44314', {
 // path: '/ws'
//});
// let connectionUrl = "localhost";
let scheme = document.location.protocol === "https:" ? "wss" : "ws";
let port = document.location.port ? (":" + document.location.port) : "";

let connectionUrl = scheme + "://" + document.location.hostname + port + "/ws";

let socket = new WebSocket(connectionUrl);

socket.onmessage = function (value) {
  console.log(value);
  console.log(value.data);
}

socket.onopen = () => {
  socket.send('hello')
};

export const sendMessage = (val) => {
  if (!socket || socket.readyState !== WebSocket.OPEN) {
    console.log("socket not connected");
  }
  console.log(val);
  socket.send(val);
}
