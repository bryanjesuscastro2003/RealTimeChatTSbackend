import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import indexRouter from "./router";

const port: number = +(process.env.PORT || 4000);

const app = express();
const httpServer = createServer(app);

app.use("/", indexRouter);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("Connected");
});

httpServer.listen(port, () => console.log("App running on port : " + port));
