let express = require('express')
let cors = require('cors')
let bodyparser = require('body-parser')

let app = express()

app.use(cors())

app.use(bodyparser.json())

app.use(bodyparser.urlencoded({extended : false}));


app.use('/fetch', require('./fetch/fetch'))
app.use('/insert', require('./insert/insert'))
app.use('/update', require('./update/update'))
app.use('/remove', require('./remove/remove'))

let port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log('server success')
})