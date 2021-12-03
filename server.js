const express = require('express')
const path = require('path')
const app = express();


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/', express.static(path.join(__dirname, 'public')))


app.use('/api', require('./routes/api')) /* first searches api.js if not found then search api.json if not found searches for api/index.js  */


app.listen(3521, () => console.log('Server started at http://localhost:3521'))