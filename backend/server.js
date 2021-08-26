const express = require('express');
const cors = require('cors');
const controllerCountry = require('./src/controller/country');
const controllerState = require('./src/controller/state');
const controllerCity = require('./src/controller/city');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//app.use(cors);

app.use('/country',controllerCountry);
app.use('/state',controllerState);
app.use('/city',controllerCity);

app.get('/',(req,res)=>{
    res.send('hello worlds!!!');
});

app.listen(4000,()=>{
    console.log("server is running on port 4000");
});
