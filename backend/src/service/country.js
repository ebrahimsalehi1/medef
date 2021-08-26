
const countryModel = require('../model/country');

const countryGetAll = async(objInput)=>{
    const data = await countryModel.fetchAll(objInput);
    return data;
}

const add = async(objInput)=>{
    const result = await countryModel.add(objInput);
    return result;
}

const edit = async(objInput)=>{
    const result = await countryModel.edit(objInput);
    return result;
}

const remove = async(objInput)=>{
    const result = await countryModel.remove(objInput);
    return result;
}

module.exports = {countryGetAll,add,edit,remove}
