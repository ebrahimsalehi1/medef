// --------------

import * as express from 'express';
const app = express();
import * as bodyParser from 'body-parser';
//import * as mongoose from 'mongoose';
import {Settings} from './settings';
import {configCreate} from './src/controllers/configManagement';

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
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()) 

//app.use(MAIN_ROUTE,login);
app.use("/",configCreate);

app.get('/',(req,res,next)=>{
    res.send('<h1>OBIEE Irisa server has been started</h1>')
});

app.listen(Settings.PORT,()=>{
    console.log(`server is running on port ${Settings.PORT}`);
});

// --------------