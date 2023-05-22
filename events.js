const EventsEmitter = require("events");

const myEmitter = new EventsEmitter();

myEmitter.on("newSale", () => {
  console.log("There was a new sale");
});

myEmitter.on("newSale", () => {
  console.log("Costumer Name :jonas");
});

myEmitter.emit("newSale");
