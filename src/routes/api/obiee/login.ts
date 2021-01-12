import * as express from 'express';
import * as axios from 'axios';
const router = express.Router();

router.post('/login',(req,res)=>{
    const url = "/OBISRV/api/v1.0/SawSession/LogOn/";
    //axios.post()
    console.log(req.body);
    res.send("Hello Ebrahim");
});

module.exports = router;
