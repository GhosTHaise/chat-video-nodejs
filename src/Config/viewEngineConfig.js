const express = require("express");
const setViewEngine = (app) => {
    app.set("view engine","ejs");
    app.set("views","./src/Views");
    app.use('/style',express.static('./src/public/style'));
    app.use('/script',express.static('./src/public/script'));
}

module.exports = setViewEngine;