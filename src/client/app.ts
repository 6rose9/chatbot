import WebSocket from 'ws';

// UI 
const sendbtn = document.getElementById("send-btn") as HTMLButtonElement;
const userinput = document.getElementById("userinput") as HTMLTextAreaElement;
const displaybox = document.getElementById("displaybox") as HTMLDivElement;
const clearhistory = document.getElementById("clear-history") as HTMLAnchorElement;
const spinner = document.getElementById("loading-spinner") as HTMLDivElement;

// for localhost => ws://localhost:8000/ws
// for cloud => wss://${window.location.hostname}/ws

const wsURL = (path:string) => {
    const islocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    if(islocal) return `ws://localhost:9000${path}`;
    return `${window.location.protocol === "https:" ? "wss" : "ws"}://${window.location.hostname}${path}`
}

const ws = new WebSocket(wsURL("/ws"));
console.log("ws", ws);

ws.onopen = () => console.log("Websocket connection established");

ws.onerror = (err) => {
    console.log("Websocket connection error:", err);
    spinner.style.display = "none";
}

ws.onclose = (event) => {
    console.log("Websocket connection closed:", event);
    spinner.style.display = "none";
}

ws.onmessage = () => {}