const express = require("express");
const EventEmitter = require("events");
const app = express();
const event = new EventEmitter();
let count = 0; 
event.on("countAPI", () => {
    count++;
  console.log("event called ",count);
});
app.get("/home", (req, res) => {
  res.send("this is my home");
  event.emit("countAPI");
});

app.get("/about", (req, res) => {
  res.send("this is my about");
  event.emit("countAPI");
});
 
app.get("/other", (req, res) => {
  res.send("this is my other");
});

app.listen(3000);
