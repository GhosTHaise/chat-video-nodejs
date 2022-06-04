const HomeController = require("../Controller/HomeController")
const express = require("express");
const Router = express.Router();

const InitialiseWebRoute = (app) =>{
    Router.get('/',HomeController.homeView);

    return app.use('/',Router);
}

module.exports = InitialiseWebRoute;