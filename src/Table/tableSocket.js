"use strict";
const IO = require("socket.io");



/**
 * List rooms.
 */
const listRooms = (table, socket) => {
    socket.on("list rooms", () => {
        console.log("Listing rooms without id rooms");
        console.log(Object.keys(table.sockets.adapter.rooms).filter(room => {
            return !Object.keys(table.sockets.sockets).includes(room);
        }));
    });
};



/**
 * Join a room by room name.
 * Sets the room to the current room.
 */
const joinRoom = socket => {
    socket.on("join room", (room) => {
        if (socket.currentRoom) { socket.leave(socket.currentRoom); }
        socket.join(room);
        socket.currentRoom = room;
        console.log(socket.id + " joined the room '" + room + "'");
    });
};



/**
 * Leave the current room.
 */
const leaveRoom = socket => {
    socket.on("leave room", () => {
        console.log("Current room:", socket.currentRoom);
        socket.leave(socket.currentRoom);
        console.log(socket.id + " left the room '" + socket.currentRoom + "'");
        socket.currentRoom = undefined;
    });
};



/**
 * Create the table IO server.
 */
const createTable = server => {
    const table = new IO(server);

    table.on("connection", socket => {
        console.log("User connected to general table.");
        joinRoom(socket);
        listRooms(table, socket);
        leaveRoom(socket);
    });

    return table;
};

module.exports = { createTable };
