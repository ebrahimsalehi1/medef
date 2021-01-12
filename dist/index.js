"use strict";
// --------------
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//import * as mongoose from 'mongoose';
const settings_1 = require("./settings");
const configManagement_1 = require("./src/controllers/configManagement");
//---------------- constants 
/*
const db = require('./config').MONGO;

mongoose
    .connect(db)
    .then(()=>{
        console.log('mongodb is connected');
    })
    .catch(err=>console.log(err));
*/
//---------------- Read Jsons
//const jsonData = require('./jsonData');
//console.log('read jsons completely is done',jsonData.JSON_CONFIG,jsonData.JSON_CONFIG["backendRoutes"]);
// --------------- Routes
//const login = require('./routes/api/obiee/login');
//const MAIN_ROUTE = '/bff/hosco';
// --------------
//app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(MAIN_ROUTE,login);
app.use("/", configManagement_1.configCreate);
app.get('/', (req, res, next) => {
    res.send('<h1>OBIEE Irisa server has been started</h1>');
});
app.listen(settings_1.Settings.PORT, () => {
    console.log(`server is running on port ${settings_1.Settings.PORT}`);
});
// --------------
