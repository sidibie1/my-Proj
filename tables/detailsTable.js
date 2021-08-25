const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let detailsSchema = new Schema({
    name: String,
    phone: Number,
    email: String,
    date: Date,
    designation: String    
},{
    //timestamps : true;
});

let bankModCreate = mongoose.model('Details', detailsSchema);

module.exports = bankModCreate;