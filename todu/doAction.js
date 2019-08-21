const express = require('express');
const router = express.Router();
const connection = require('../db');



router.get('/',(req,res,next)=>{
    console.log(req)
    res.json({ user: '...' })
})
router.get('/getList',(req,res,next)=>{
    res.json({ user: 'tobi' })
})
router.post('/addList',(req,res,next)=>{
    connection((connection)=>{
        let sql  = `insert todu(data,status) values(?,'doing')`;
        connection.query(sql,[req.body.data],(err,result)=>{
            if(err){
                next(err)
            }
            res.json({message:'OK'})
        })
    })
})
module.exports = router