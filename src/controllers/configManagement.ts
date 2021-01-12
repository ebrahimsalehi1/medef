import * as express from 'express';
import * as axios from 'axios';
import {PrismaClient} from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

//export function configCreate(){
//    console.log('configCreate',new Date().getTime());
    
export const configCreate = router.post('/config',async (req: express.Request,res: express.Response)=>{
        console.log(req.body);

        try{
            const Config = await prisma.config.create(req.body);

            res.status(200).send('OK');
        }
        catch(e){
            res.status(417).send(e);
        }

    });
    
//}

//export {v};