
const express = require('express');
const router = express.Router();

const cityService = require('../service/city');

router.get('/all',async (req,res)=>{
    try{
        const {skip,take} = req.query;
        const result = await cityService.countryGetAll({skip,take});
        res.status(200).json(result);
    }
    catch(e){
        console.error(e);
        res.status(417).json({error:e})
    }
});

router.post('/',async (req,res)=>{
    const {state_id,city_id,city_name} = req.body;
    const result = await cityService.add({state_id,city_id,city_name});
    res.send(result);
});

router.put('/',async (req,res)=>{
    const {state_id,city_id,city_name}  = req.body;
    const result = await cityService.edit({state_id,city_id,city_name});
    res.send(result);
});

router.delete('/:city_id',async (req,res)=>{
    const {city_id} = req.params;
    const result = await cityService.remove({city_id});
    res.send(result);
});

module.exports = router;

