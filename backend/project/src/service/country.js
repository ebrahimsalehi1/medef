
const countriesData = require('../model/country');

const countryGetAll = async()=>{
    const data = await countriesData.fetchAll();
    console.log('data',data);
    return data;
}

module.exports = {countryGetAll}
