// importing the express and mongo db module
let express = require('express');
let mongodb = require('mongodb')

// create the ref, this ref is used to connect to DataBase

let suresh = mongodb.MongoClient;

// To create the custome module => Router() is used
        //get ( "url pattern " , call back function)
         //(monodb protocal :// host : port no / database name)
const fetch = express.Router().get("/" , (req,res)=>{
                    // suresh.connect("mongodb://localhost:27017/angdb" , (err,conn)=>{
                    suresh.connect('mongodb+srv://admin:admin@miniprojects.1qdeb.mongodb.net/angdb?retryWrites=true&w=majority' , (err,conn)=>{
                        if(err) throw err;
                        else{
                            let db = conn.db('angdb')
                            db.collection('products').find().toArray((err,array)=>{
                                if(err) throw err;
                                else{
                                    res.send(array)
                                }
                            })
                        }
                    } )
                })  

module.exports = fetch