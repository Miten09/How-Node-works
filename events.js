// const EventsEmitter = require("events");
const http = require("http");

// const myEmitter = new EventsEmitter();

// myEmitter.on("newSale", () => {
//   console.log("There was a new sale");
// });

// myEmitter.on("newSale", () => {
//   console.log("Costumer Name :jonas");
// });

// myEmitter.emit("newSale", 200, "ok");

///////////////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request Received!");
  console.log(req.url);
  res.end("Request Received");
});

server.on("request", (req, res) => {
  console.log("Another Request");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(9000, "127.0.0.1", () => {
  console.log("Waiting for requests.....");
});
