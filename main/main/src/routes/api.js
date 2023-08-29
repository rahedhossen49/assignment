const express = require('express');
const router= express.Router();



const DemoController=require('../controllers/DemoController')




router.get('/demo1',DemoController.demo1);
router.post('/demo2',DemoController.demo2);
router.put('/demo3',DemoController.demo3);
router.delete('/demo4',DemoController.demo4);


module.exports=router;

