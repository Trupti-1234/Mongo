const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
    id:Number,
    name:String,
    email:String,
    branch:String,
    phone: String,
    sem:Number
    
});
module.exports = mongoose.model("Student",studentSchema)