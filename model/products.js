const mongoose = require('mongoose')

const products = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
    
   
})
module.exports = mongoose.model("PRODUCTS",products)
