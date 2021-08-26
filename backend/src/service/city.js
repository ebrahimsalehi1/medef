
const cityModel = require('../model/city');

const countryGetAll = async(objInput)=>{
    const data = await cityModel.fetchAll(objInput);
    return data;
}

const add = async(objInput)=>{
    const result = await cityModel.add(objInput);
    return result;
}

const edit = async(objInput)=>{
    const result = await cityModel.edit(objInput);
    return result;
}

const remove = async(objInput)=>{
    const result = await cityModel.remove(objInput);
    return result;
}

module.exports = {countryGetAll,add,edit,remove}
