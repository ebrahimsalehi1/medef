
const express = require('express');
const router = express.Router();

const stateService = require('../service/state');

router.get('/all',async (req,res)=>{
    try{
        const {skip,take} = req.query;
        const result = await stateService.countryGetAll({skip,take});
        res.status(200).json(result);
    }
    catch(e){
        console.error(e);
        res.status(417).json({error:e})
    }
});

router.post('/',async (req,res)=>{
    console.log(req.body);
    const {state_id,country_id,state_name} = req.body;
    const result = await stateService.add({state_id,country_id,state_name} );
    res.send(result);
});

router.put('/',async (req,res)=>{
    const {state_id,country_id,state_name}  = req.body;
    const result = await stateService.edit({state_id,country_id,state_name});
    res.send(result);
});

router.delete('/:state_id',async (req,res)=>{
    const {state_id} = req.params;
    const result = await stateService.remove({state_id});
    res.send(result);
});

module.exports = router;

