const express = require("express");
const setViewEngine = require("./Config/viewEngineConfig");
const InitialiseWebRoute = require("./Router/Home");
const InitialiseRoomRoute = require("./Router/Room");
//variale global
const app = express();
const PORT = process.env.PORT || 5000;
//moteur de template
setViewEngine(app);
//
//Mes Routes
InitialiseWebRoute(app);
InitialiseRoomRoute(app);
//
app.listen(PORT,()=>{
    console.log(`App start on : http://localhost:${PORT}`)
})