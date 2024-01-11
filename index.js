// index.js
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const basicAuth = require("express-basic-auth"); // Add this line
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = process.env.PORT || 3000;

app.use(
  "/admin",
  basicAuth({
    users: { admin: "WLAN4sd." },
    challenge: true,
    realm: "Imb4T3st4pp",
  })
);

app.get("/admin", (req, res) => {
  res.sendFile(__dirname + "/admin.html");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.on("stream", (image) => {
    socket.broadcast.emit("stream", image);
  });
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
