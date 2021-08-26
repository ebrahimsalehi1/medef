
const stateModel = require('../model/state');

const countryGetAll = async(objInput)=>{
    const data = await stateModel.fetchAll(objInput);
    return data;
}

const add = async(objInput)=>{
    const result = await stateModel.add(objInput);
    return result;
}

const edit = async(objInput)=>{
    const result = await stateModel.edit(objInput);
    return result;
}

const remove = async(objInput)=>{
    const result = await stateModel.remove(objInput);
    return result;
}

module.exports = {countryGetAll,add,edit,remove}
