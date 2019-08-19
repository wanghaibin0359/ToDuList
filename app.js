let http =require('http'),
    express = require('express'),
    app =require('express')(),
    tudoList = require('./todu/doAction');
    
let server= http.createServer(app).listen(3000,()=>{
    console.log('server node 3000')
})

app.use(express.static('./public'))
    .use('/todu',tudoList)
    .use('*',(req,res,next)=>{
        console.log(1)
        res.write('hellow world')
        res.end()
    })
