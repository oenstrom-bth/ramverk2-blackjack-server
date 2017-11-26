"use strict";
const app = require("express")();
const server = require("http").Server(app);
const { createTable } = require("./src/Table/tableSocket");

createTable(server);

server.listen(3000, () => console.log("Listening on port 3000"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
