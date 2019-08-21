let http =require('http'),
    express = require('express'),
    app =require('express')(),
    tudoList = require('./todu/doAction'),
     bodyParser = require('body-parser');//解析,用req.body获取post参数
let server= http.createServer(app).listen(3000,()=>{
    console.log('server node 3000')
})

app.use(express.static('./public'))
    .use(bodyParser.urlencoded({extended: false}))
    .use('/todu',tudoList)
    .use((req,res,next)=>{
        let err =new Error('page no found')
        err.status = 404
        next(err)
    })
    .use((err,req,res,next)=>{
        res.status(err.status || 500)
        res.end(err.message)
    })
