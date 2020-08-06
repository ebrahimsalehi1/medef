
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json());

app.post('/login',(req,res,next)=>{
    const userData = req.body;

    if(userData.username==='admin' && userData.pass==='admin')
        res.send('{"result":true}');
    else
        res.send('{"result":false}');
    //next();
});

app.get('/',(req,res,next)=>{
    res.send('<h1>Welcome to my web site</h1>');
});

app.listen(8081,()=>{
    console.log('I am listening on port 8081');
});
