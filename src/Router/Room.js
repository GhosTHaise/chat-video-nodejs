const express = require("express");
const RoomController =require('../Controller/RoomController.js');
const Router = express.Router();

const InitialiseRoomRoute = (app) => {
    Router.get("/:room",RoomController.RoomView);

    return app.use("/",Router);
}

module.exports = InitialiseRoomRoute;
