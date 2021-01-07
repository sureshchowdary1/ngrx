const express = require('express')
const mongodb = require('mongodb')

let suresh = mongodb.MongoClient;

const insert = express.Router().post('/' , (req,res) => {
    // suresh.connect('mongodb://localhost:27017/angdb', (err,conn)=>{
    suresh.connect('mongodb+srv://admin:admin@miniprojects.1qdeb.mongodb.net/angdb?retryWrites=true&w=majority', (err,conn)=>{
        if(err) throw err;
        else{
            let db =conn.db('angdb')
            db.collection('products').insertOne(
                {'p_id':req.body.p_id,
                'p_name':req.body.p_name,
                'p_cost':req.body.p_cost}
                , (err,result)=>{
                    if(err) throw err;
                    else{
                        res.send({insert :'success'})
                    }
                }
            )
        }
    })
})

module.exports = insert;