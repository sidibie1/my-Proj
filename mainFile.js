const express = require('express');
const app = express();
const cors = require('cors')
const routesFunc = require('./routes/routes');
const mongoose = require('mongoose');
const http = require('http');

const server = http.createServer(app);

app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/',routesFunc)

mongoose.connect(`mongodb+srv://siddarth:siddu1996@cluster0.bxdj5.mongodb.net/nodetodosample?retryWrites=true&w=majority`,
{ useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify: false });

server.listen(3000,() =>{
    console.log('Server started on port 3000');
});