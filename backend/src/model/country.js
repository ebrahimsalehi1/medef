
const { PregnantWomanSharp } = require('@material-ui/icons');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const fetchAll = async (objInput)=>{
    const countries = await prisma.ebi_Country.findMany({skip:Number(objInput.skip),take:Number(objInput.take)});
    const countItems = await prisma.ebi_Country.count();

    return {items:countries,totalItems:countItems};
}

const add = async(objInput)=>{
    const result = await prisma.ebi_Country.create({data:objInput});
    return result;
}

const edit = async(objInput)=>{
    const result = await prisma.ebi_Country.update({data:objInput,where:{country_id:objInput.country_id}});
    return result;
}

const remove = async(objInput)=>{
    const result = await prisma.ebi_Country.delete({where:{country_id:Number(objInput.country_id)}});
    return result;
}

module.exports = {fetchAll,add,edit,remove};
