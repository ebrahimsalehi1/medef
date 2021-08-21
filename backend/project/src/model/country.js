
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const fetchAll = async ()=>{
    const countries = await prisma.ebi_Country.findMany();
    return countries;
}

module.exports = {fetchAll};
