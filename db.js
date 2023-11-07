const { response } = require('express')
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://trupti-1234:20122003@cluster0.ft0fvyn.mongodb.net/?retryWrites=true&w=majority",{
useUnifiedTopology:true,
useNewUrlParser:true,
})
.then((response) => {
    console.log("connected to database")
}
)
.catch((error) =>{
    console.log(error)
}
)

