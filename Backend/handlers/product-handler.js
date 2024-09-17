const Product = require("./../db/product")

async function addProduct(model){
    let product = new Product({
        name: model.name
        
    })
    await product.save();
    return product.toObject();
}

async function updateProduct(id, model){
    await Product.findByIdAndUpdate(id,model);
}

async function deleteProduct(id){
    await Product.findByIdAndDelete(id);
}

async function getAllProducts(){
    let products = await Product.find();
    return products.map(x=>x.toObject());
}

async function getProduct(id) {
    let product = await Product.findById(id);
    if (!product) {
        throw new Error(`Product with ID ${id} not found`);
    }
    return product.toObject();
}

module.exports = { addProduct,updateProduct,deleteProduct,getAllProducts,getProduct}