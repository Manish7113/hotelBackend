const mongoose = require('mongoose')
 
const orderCategory = new mongoose.Schema({
    category : {
        type : String,
        required : true,
        unique : true,
        trim : true,
    },
    isActive :{
        type : Boolean,
        required : true,
        default : false,
    }


},{
    timestamps : true
})

module.exports = mongoose.model("OrderCategory", orderCategory)