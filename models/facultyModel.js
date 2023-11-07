const mongoose=require ('mongoose')

const facultySchema = mongoose.Schema(
    {
        id:Number,
        name:String,
        branch:String,
        experiance:Number
    }
);

module.exports = mongoose.model("Faculty",facultySchema)