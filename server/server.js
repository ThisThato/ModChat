const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());
const server = http.createServer(app);
const io = socketio(server);
dotenv.config({ path: "./config/config.env" });
const router = require("./router");
const PORT = process.env.PORT || 5000;

connectDB();

io.on("connection", (socket) => {
  console.log("New WS Connection");

  socket.on("disconnect", () => {
    console.log("User has disconnected");
  });
});

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/users", router);

app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold
  )
);
