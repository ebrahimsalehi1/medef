
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json());

//------------------------------------------------------------

const objUsers = [
    {
        username:'irisa_salehi',
        id: '878120',
        name:'ebrahim salehi',
        hireDate: '1387'
    },
    {
        username:'irisa_masaeli',
        id: '869101',
        name:'davood masaeli',
        hireDate: '1386'
    },
    {
        username:'irisa_yaghoubi',
        id: '928212',
        name:'foad yaghoubi',
        hireDate: '1392'
    },
    {
        username:'irisa_khashee_far',
        id: '977809',
        name:'erfan khasheei far',
        hireDate: '1397'
    },
    {
        username:'irisa_vatankhah',
        id: '878118',
        name:'mehrdad vatankhah',
        hireDate: '1387'
    }
]

//------------------------------------------------------------

app.post('/login',(req,res,next)=>{
    const userData = req.body;

    if(userData.username==='admin' && userData.pass==='admin')
        res.send('{"result":true}');
    else
        res.send('{"result":false}');
});

//------------------------------------------------------------

app.get('/users',(req,res,next)=>{
    const objCreated = {
        totalElements: objUsers.length,
        elements: objUsers
    }
    res.send(objCreated);
});

//------------------------------------------------------------

app.get('/user/:id',(req,res,next)=>{
    const objFound = objUsers.filter(item=>item.id===req.params.id);
    res.send(objFound);
});

//------------------------------------------------------------

app.post('/addUser',(req,res,next)=>{
    const objUser = req.body;
    objUsers.push(objUser);
    res.send(objUser);
});

//------------------------------------------------------------

app.delete('/deleteUser',(req,res,next)=>{
    const deleteduser = objUsers.splice(0,1);
    res.send(deleteduser);
});
//------------------------------------------------------------
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

//------------------------------------------------------------

app.get('/',(req,res,next)=>{
    
    console.log('the request comes from ',req.connection.remoteAddress);
    res.send('<h1>Welcome to my web site</h1>');
});

//------------------------------------------------------------

app.listen(8081,()=>{
    console.log('I am listening on port 8081');
});

//------------------------------------------------------------
