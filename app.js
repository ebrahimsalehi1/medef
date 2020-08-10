
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

app.get('/systems',(req,res,next)=>{
    const systemData = [
        {
            system:'اطلاعات کارکنان',
            systemEng:'Personal System',
            description:'در این سیستم کلیه اطلاعات کارکنان مدیریت می شوند',
            abbreviation:'PDS'
        },
        {
            system:'دفترداری',
            systemEng:'Book keeping',
            description:'سیستم مدیریت اسناد ',
            abbreviation:'BFS'
        },
    ];

    res.send(systemData);
});

app.get('/',(req,res,next)=>{
    res.send('<h1>Welcome to my web site</h1>');
});

app.listen(8081,()=>{
    console.log('I am listening on port 8081');
});
