const mongoose=require("mongoose");
const {Schema} = mongoose;
const productSchema=new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    images: Array(String),
});
const Product = mongoose.model("product", productSchema);
module.exports = Product;