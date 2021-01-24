
const config = require('./config.js');
const fs = require('fs');

function readData(fileName){
    return new Promise(
        (resolve,reject)=>{
            fs.readFile(config.FRONT_PATH+'/'+fileName,'utf-8',(err,data)=>{
                if(err)
                    reject(err);
                
                resolve(data);    
            })
        }
    );
}

function getJsonConfig(fileName){
    let jsonData = {};
    fs.readFile(config.FRONT_PATH+'/'+fileName,'utf-8',(err,data)=>{
        if(err)
            return err;
        
        return data;    
    });
}

let JSON_WEBSERVICES = {};
let JSON_CONFIG = {};   

//let JSON_CONFIG = getJsonConfig('config.json');

/*
readData('webservices.json').
then(data=>{
    JSON_WEBSERVICES = data;
    //console.log(JSON_WEBSERVICES);
}).
catch(err=>{
    console.log(err);
});

readData('config.json').
then(data=>{
    JSON_CONFIG = data;
    //console.log(JSON_CONFIG);
}).
catch(err=>{
    console.log(err);
});
*/

module.exports = {JSON_WEBSERVICES,JSON_CONFIG};
