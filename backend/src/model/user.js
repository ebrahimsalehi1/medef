//import {PrismaClient} from '@prisma/client';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient()

const fetchAll = async ()=>{
    const users = await prisma.$use.findMany();
    console.log(users);
}

const save = async (objUser) =>{
    const result =  await prisma.users.create({
        data:objUser
    }).then(res=>{
        return res;
    }).catch(err=>{
        return err;
    });

}

fetchAll();
// const r = save({firstName:'zahra',lastName:'omidi',email:'zahra-omidi@gmail.com',avatar:''});
// console.log(r);