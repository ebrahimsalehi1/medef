
const countryService = require('../service/country');

const countryGetAll = async (req,res)=>{
    const result = await countryService.countryGetAll();
   res.send(result);
}

module.exports ={countryGetAll}
