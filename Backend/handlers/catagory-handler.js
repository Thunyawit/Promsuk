const Catagory = require("../db/catagory");

async function addCatagory(model){
    let catagory = new Catagory({
        name:model.name,
        });
    await catagory.save();
    return catagory.toOdject();
}
async function updateCatagory(id,model){
    await Catagory.findByIdAndUpdate({_id:id},model)
    return;
}

async function deleteCatagory(id){
    await Catagory.findByIdAndDelete({id})
    return;
}
module.exports ={addCatagory,updateCatagory,deleteCatagory};
    