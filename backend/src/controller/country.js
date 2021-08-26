
const express = require('express');
const router = express.Router();

const countryService = require('../service/country');

router.get('/all',async (req,res)=>{
    try{
        const {skip,take} = req.query;
        const result = await countryService.countryGetAll({skip,take});
        res.status(200).json(result);
    }
    catch(e){
        console.error(e);
        res.status(417).json({error:e})
    }
});

router.post('/',async (req,res)=>{
    const {country_id,country_name} = req.body;
    const result = await countryService.add({country_id,country_name});
    res.send(result);
});

router.put('/',async (req,res)=>{
    const {country_id,country_name} = req.body;
    const result = await countryService.edit({country_id,country_name});
    res.send(result);
});

router.delete('/:country_id',async (req,res)=>{
    const {country_id} = req.params;
    const result = await countryService.remove({country_id});
    res.send(result);
});

module.exports = router;

