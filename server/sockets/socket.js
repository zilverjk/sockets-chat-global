const { io } = require("../server");

//Para saber cuando un usuario se conecta en el frontend
io.on("connection", client => {
  console.log("Usuario conectado");

  client.emit("enviarMensaje", {
    usuario: "Servidor",
    mensaje: "Bienvenido a esta aplicación"
  });

  // Aca sabemos cuando el usuario se desconectó
  client.on("disconnect", () => {
    console.log("Usuario se desconectó");
  });

  // Escuchar / Recibir del Cliente o Frontend
  client.on("enviarMensaje", (data, callback) => {
    console.log(data);

    // boradcast.emit() es para enviar a TODOS los usuarios conectados al Servidor
    client.broadcast.emit("enviarMensaje", data);

    // if (mensaje.usuario) callback({ mensaje: "Todo salio OK!" });
    // else callback({ mensaje: "Todo salio mal!" });
  });
});
