const express = require("express");
const router = express.Router();
const Catagory = require("./../db/catagory");
const { addCatagory, updateCatagory, deleteCatagory } = require("../handlers/catagory-handler");
router.post("",async (req,res)=>{
    console.log("here");
    let model = req.body;
    let result = await addCatagory(model);
res.send(result);
});

router.put("/:id",async (req,res)=>{
    let model = req.body;
    let id= req.params['id'];
    await updateCatagory(id,model);
    res.send({  message:"update"});
});
router.delete("/;id",async(req,res)=>{
    let id = req.params ["id"];
    await deleteCatagory(id);
    res.send({  message:"delete"}); 
})


module.exports = router; 