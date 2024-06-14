import http from "node:http";
import fs from "node:fs/promises";
import process from "node:process";
import { WebSocketServer } from "ws";

import express from "express";

const app = express();

let counter = 0;

app.get('/', (req, res, next) => {
    counter = counter + 1;
    console.log(counter);
    next();
})

app.get("/getSecretData", (req, res, next) => {
    res.send(`Secret data recieved: ${counter}`);
})

app.use(express.static("client"));

const server = http.createServer(app);

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
    ws.on("message", (message) => {
        console.log(message.toString());
        ws.send(`Hi, you sent me message ${message}`);
    });

    ws.send("Hello, new client connected");
});

const host = 'localhost';
const port = 8000;

server.listen(port, host, () => {
    console.log(`Server started on http://${host}:${port}`)
    console.log('AI3 not pasted the test');
    console.log('Console log passed the test');
})