const mongoose= require('mongoose');

const ProductSchema= new mongoose.Schema({
    name: String,
    brand: String,
    price: String,
    category: String,
    userId: String
})

module.exports= mongoose.model("products", ProductSchema); 