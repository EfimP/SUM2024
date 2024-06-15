import http from "node:http";
import { WebSocketServer } from "ws";
import express from "express";

const app = express();

let counter = 0;

app.get('/', (req, res, next) => {
    counter = counter + 1;
    console.log(counter);
    next();
})

app.use(express.static("client"));

const server = http.createServer(app);

const wss = new WebSocketServer({ server });

let buf = "";

wss.on("connection", (ws) => {
    ws.on("message", (message) => {
        buf = buf + "\n" + message.toString();
        console.log(buf);
        for (let i of wss.clients) {
           i.send(message.toString() + "\n");
        }
    });

    ws.send(buf);
});

const host = 'localhost';
const port = 8000;

server.listen(port, host, () => {
    console.log(`Server started on http://${host}:${port}`)
})