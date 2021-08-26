
const { PregnantWomanSharp } = require('@material-ui/icons');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const fetchAll = async (objInput)=>{
    const cities = await prisma.ebi_City.findMany({skip:Number(objInput.skip),take:Number(objInput.take)});
    const countItems = await prisma.ebi_City.count();

    return {items:cities,totalItems:countItems};
}

const add = async(objInput)=>{
    const result = await prisma.ebi_City.create({data:objInput});
    return result;
}

const edit = async(objInput)=>{
    const result = await prisma.ebi_City.update({data:objInput,where:{city_id:objInput.city_id}});
    return result;
}

const remove = async(objInput)=>{
    const result = await prisma.ebi_City.delete({where:{city_id:Number(objInput.city_id)}});
    return result;
}

module.exports = {fetchAll,add,edit,remove};
