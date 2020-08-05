const express = require('express');
const app = express();
const soap = require('soap');
const jsonWebservices = require('./obiee-webservices.json');

app.post('/api/v1.0/createapprole',(req,res,next)=>{
    console.log('we are in the midleware! 2');

    //const url = 'http://172.25.40.135:9500/PolicyMngAPI/ApplicationRoleMngAPIPort?wsdl';
    const url = jsonWebservices.filter(item=>item.name==='CreateApplicationRole')[0].endpoint;

    const args = { appStripId: 'obi', appRoleName: 'ebi-approle',appRoleDisplayName:'ebi-display',appRoleDescription:'ebi-description'};
    soap.createClient(url, function(err, client) {
    if (err) console.error(err);
    else {
        client.CreateApplicationRole(args, function(err, response) {
        if (err) {
            //console.error(err);
            res.send(JSON.stringify({"error":err}))
        }
        else {
            //console.log(response);
            res.send(JSON.stringify({"resp":response}));
        }
        });
    }
    });

    //next();

});

app.use('/',(req,res,next)=>{
    res.send('<h1>OBIEE Irisa server has been started</h1>')
});

app.listen(3000);
