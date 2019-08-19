const express = require('express');
const router = express.Router();


router.get('/',(req,res,next)=>{
    console.log(req)
    res.json({ user: '...' })
})
router.get('/getList',(req,res,next)=>{
    console.log(req)
    res.json({ user: 'tobi' })
})
module.exports = router