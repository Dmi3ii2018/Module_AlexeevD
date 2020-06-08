let scheme = document.location.protocol === "https:" ? "wss" : "ws";
let port = document.location.port ? (":" + document.location.port) : "";

let connectionUrl = scheme + "://" + document.location.hostname + port + "/ws";

export const socket = new WebSocket(connectionUrl);

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
