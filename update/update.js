const express = require('express')
const mongodb = require('mongodb')

let suresh = mongodb.MongoClient;

const update = express.Router().put('/' , (req,res) => {
    // suresh.connect('mongodb://localhost:27017/angdb', (err,conn)=>{
    suresh.connect('mongodb+srv://admin:admin@cluster.1qdeb.mongodb.net/angdb?retryWrites=true&w=majority', (err,conn)=>{
        if(err) throw err;
        else{
            let db =conn.db('angdb')
            db.collection('products').updateOne(
                {"p_id" : req.body.p_id},{$set : {"p_name" : req.body.p_name , "p_cost" : req.body.p_cost }}
                , (err,result)=>{
                    if(err) throw err;
                    else{
                        res.send({update :'success'})
                    }
                }
            )
        }
    })
})

module.exports = update;