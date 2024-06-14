import {f} from "./b.js";

console.log("efpbmjtiofnbrkpnmw;aldbkmbn;drnt");
f();

setInterval(async () => {
    const response = await fetch("/getSecretData")
    const text = await response.text();

    console.log("text")

    const elem = document.getElementById("SecretDataField");
    elem.textContent = text;
}, 1000);

function initializeCommunication() {
    let socket = new WebSocket("ws://localhost:8000");

    socket.onopen = (event) =>{
        console.log("Socket open");
        socket.send("Hello from client");
    };

    socket.onmessage = (event) => {
        console.log(`Message recieved ${event.data}`);
    };
}

initializeCommunication();