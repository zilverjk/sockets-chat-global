var button = document.getElementById("btnTest");
var count = 1;

button.onclick = function() {
  // count += 1;
  socket.emit("enviarMensaje", {
    empresa: "20463395051",
    pagina: "naranjito.com",
    controlId: "btnTest",
    contador: count
  });
};

// Inicializamos io en una variable
var socket = io();

// on es para escuchar/recibir la data del Servidor
// Establecemos la conexión con el servidor
socket.on("connect", function() {
  console.log("Conectado al Servidor");
});

// Detecta cuando se pierde la conexión con el Servidor
socket.on("disconnect", function() {
  console.log("Se perdió la conexión con el Servidor");
});

// emit es para enviar data al Servidor
socket.emit(
  "enviarMensaje",
  {
    usuario: "André",
    mensaje: "Hola mundo!"
  },
  function(res) {
    console.log("Respuesta Servidor: ", res);
  }
);

// Escuchar / Recibir la data que envía el Servidor
socket.on("enviarMensaje", function(mensaje) {
  // console.log(`Servidor: ${mensaje}`); <-- Con esto no muestra el objeto
  console.log("Servidor:", mensaje);
});
