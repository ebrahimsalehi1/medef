
const express = require('express');
//const app = express();
const countryGetAll = require('../controller/country');

const router = express.Router();

router.get('/all',(req,res)=>{
    countryGetAll.countryGetAll(req,res);
})

module.exports = router;
