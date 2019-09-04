const express = require('express');
const router = express.Router();
const connection = require('../db');



router.get('/',(req,res,next)=>{
   // console.log(req)
    res.json({ user: '...' })
})
router.post('/getList', (req,res,next) => {
    let {page,row,key='',val=''}= req.body
    let sql  = `select * from todu `,
        count = `select count(*) as "total" from todu `
        params = [],params1 = [],resuss='';
    if(key){
        count = sql+='where ?? like ? '
        params.push(key)
        params.push('%'+val+'%')
        params1.push(key)
        params1.push('%'+val+'%')
    }
    sql+='order by createtime desc '
           
    if(page && row){
        sql+='limit ?,?';
        params.push((page-1)*row)
        params.push(+row)
    }
   
    Promise.all([
        connection(sql+resuss,params),
        connection(count,params1)
    ]).then(result=>{
       // console.log(result)
        res.json({message:'true',data:result[0],total:result[1][0].total})
    }).catch(err=>{
        next(err)
    })
        
})
router.post('/addList',(req,res,next)=>{
        let sql  = `insert todu(data,status) values(?,0)`;
        connection(sql,[req.body.data]).then(result=>{
            res.json({message:'true'})
        }).catch(err=>{
            next(err)
        })
})
router.post('/change',(req,res,next)=>{
    let {id,status}=req.body
    let sql  = `update todu set status=? where id=?`,
        params = [status,id];
    connection(sql,params).then(result=>{
        res.json({message:'true'})
    }).catch(err=>{
        next(err)
    })
})
router.post('/delete',(req,res,next)=>{
    let {id}=req.body
    let sql  = `delete from todu where id=?`,
        params = [id];
    connection(sql,params).then(result=>{
        res.json({message:'true'})
    }).catch(err=>{
        next(err)
    })
})
module.exports = router