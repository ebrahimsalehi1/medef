const express = require('express');
const cors = require('cors');
const routeCountry = require('./src/routes/country');

const app = express();

//app.use(cors);
app.use('/country',routeCountry);

app.get('/',(req,res)=>{
    res.send('hello worlds!!!');
});

app.listen(4000,()=>{
    console.log("server is running on port 4000");
});
