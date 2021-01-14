import * as express from 'express';
import * as axios from 'axios';
import {PrismaClient} from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();
    
export const configCreate = router.post('/config',async (req: express.Request,res: express.Response)=>{

    //res.setHeader('Content-Type', 'application/json');

    async function createNew(){
        const Config = await prisma.config.create({data:req.body});
        res.status(200).send('OK');        
        return Config;
    }


    //await prisma.$connect();
    //await createNew();
    //const Config = await prisma.config.create({data:req.body});
    //res.status(200).send('OK');   
    //await prisma.$disconnect();

    
    createNew()
    .then(data=>{
        console.log(data);
        
    })
    .catch(e=>{
        console.log(e);   
        res.status(417).send(e);         
        throw e;
    })
    .finally(async ()=>{    
        await prisma.$disconnect();
    });

});
    
