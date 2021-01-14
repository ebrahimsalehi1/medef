import * as fs from 'fs';
import * as path from 'path';

async function main(){
    //var filename = path.basename('/media/alireza/7F5822A8/');
    //console.log(filename);    
    fs.readdir('/media/alireza/7F5822A85D698FD3/Learn/js/Udemy.The.Complete.JavaScript.Course.2019.Build.Real.Projects/Udemy.The.Complete.JavaScript.Course.2019.Build.Real.Projects/1. Course Introduction/',(err,files)=>{
        files.forEach(file=>{
            console.log(file);            
        })
    })
}

main()
.catch(e=>{
    throw e;
})
.finally(async ()=>{
    console.log('finally');    
});
