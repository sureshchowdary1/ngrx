const express = require('express')
const mongodb = require('mongodb')

let suresh = mongodb.MongoClient;

let remove = express.Router().delete('/', (req,res)=>{
    
    // suresh.connect('mongodb://localhost:27017/angdb', (err,conn)=>{
    suresh.connect('mongodb+srv://admin:admin@cluster.1qdeb.mongodb.net/angdb?retryWrites=true&w=majority', (err,conn)=>{
        if(err) throw err;
        else{
            let db =conn.db('angdb')
            db.collection('products').deleteOne({
                'p_id':req.body.p_id
            },(err,result)=>{
                if(err) throw err;
                else{
                    res.send({'delete' : 'success'});
                }
            })
        }
    })
})

module.exports = remove