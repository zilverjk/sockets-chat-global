const express = require("express");
const socketIO = require("socket.io");
const http = require("http");

const path = require("path");

const app = express();
let server = http.createServer(app); // Para crear el servidor socket.io

const publicPath = path.resolve(__dirname, "../public");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//Inicializamos el socket.io (Aca se establece la comunicación con el Backend)
module.exports.io = socketIO(server); // <-- module exports para invocar io como una constante en socket.js
require("./sockets/socket"); // <-- Llamo al socket.js donde esta la lógica del websocket

server.listen(port, err => {
  if (err) throw new Error(err);

  console.log(`Servidor corriendo en puerto ${port}`);
});
