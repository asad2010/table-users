const express = require('express');
const app = express();
const db_conn = require('./db')
const router = require('./src/routes/routes')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')

app.use('/', router)
db_conn()
app.listen(3000, ()=>{
    console.log('server runned on port 3000');
})