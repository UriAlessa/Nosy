//Requirements and Declarations
const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/database");
require("./config/passport");
const router = require("./routes/index");
const admin = require("./routes/admin");
const socket = require("socket.io");
const path = require("path");

//App
const app = express();

//Middelwares
app.use(cors());
app.use(express.json());

//Routers
app.use("/api", router);
app.use("/api/admin", admin);

//Validate production state
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

const PORT = process.env.PORT;
const HOST = process.env.HOST || "0.0.0.0";

//Server listening
const server = app.listen(PORT, HOST, () =>
  console.log(`Server listening on port ${PORT} (${HOST})`)
);

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

const socketioJwt = require("socketio-jwt");
io.use(
  socketioJwt.authorize({
    secret: process.env.SECRETORKEY,
    handshake: true,
  })
);

io.on("connection", (socket) => {
  const usernameSending = socket.decoded_token._doc.username;
  console.log(usernameSending);
  socket.on("game_request", (username) => {
    io.to(socket.decoded_token._doc.username === username && socket.id).emit(
      "game_request",
      usernameSending
    );
  });

  // socket.on("message", (mensaje) => {
  //   if (mensaje === "Nuevo comentario") {
  //     io.sockets.emit("message", "Refetch");
  //   }
  //   if (mensaje.includes("writing")) {
  //     socket.broadcast.emit("message", mensaje);
  //   }
  // });
  // socket.on("friend_request", (id) => {});
});
