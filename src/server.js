import { createRequire } from "module";
const require = createRequire(import.meta.url);
const express = require("express");
const setViewEngine = require("./Config/viewEngineConfig");
const InitialiseWebRoute = require("./Router/Home");
const InitialiseRoomRoute = require("./Router/Room");

//variale global
const app = express(),
      PORT = process.env.PORT || 5000,
      http = require("http").Server(app),
      io = require('socket.io')(http);
//moteur de template
setViewEngine(app);
//
//Mes Routes
InitialiseWebRoute(app);
InitialiseRoomRoute(app);
//

//Socket
io.on('connection',(socket)=>{
    console.log("you are connected !")
});
//
http.listen(PORT,()=>{
    console.log(`App start on : http://localhost:${PORT}`)
})