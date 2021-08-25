const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let otherSchema = new Schema({
    name: Mixed,
    phone: Mixed,
    email: String,
    date: Date,
    designation: String    
},{
    //timestamps : true;
});

let bankModCreate = mongoose.model('Details', detailsSchema);

module.exports = bankModCreate;