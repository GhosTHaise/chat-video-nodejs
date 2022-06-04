import { createRequire } from "module";
const require = createRequire(import.meta.url);
const express = require("express");
const {ExpressPeerServer} = require('peer');
const setViewEngine = require("./Config/viewEngineConfig");
const InitialiseWebRoute = require("./Router/Home");
const InitialiseRoomRoute = require("./Router/Room");

//variale global
const app = express(),
      PORT = process.env.PORT || 5001,
      http = require("http").Server(app),
      io = require('socket.io')(http);
//moteur de template
setViewEngine(app);
//
const { PeerServer } = require('peer');

const peerServer = PeerServer({ port: 9003, path: '/myapp' });
//Mes Routes
InitialiseWebRoute(app);
InitialiseRoomRoute(app);
//

//Socket
io.on('connection',(socket)=>{
    socket.on("join-room",(Roomid,UserId)=>{
        socket.join(Roomid);
        socket.to(Roomid).emit("user-connected",UserId)
    })
});
//
//Peer server

//
//
http.listen(PORT,()=>{
    console.log(`App start on : http://localhost:${PORT}`)
})