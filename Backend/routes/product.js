const express = require("express");
const { addProduct, updateProduct, deleteProduct, getAllProducts, getProduct } = require("../handlers/product-handler");
const router = express.Router();


router.post("/", async (req,res) => {
    let model = req.body;
    let product = await addProduct(model);
    res.send(product);

});

router.put("/:id", async (req,res) => {
    let model = req.body;
    let id = req.params["id"];
    await updateProduct(id,model);
    res.send({message: "updated"});

});

router.delete("/:id", async (req,res) => {
    let id = req.params["id"];
    await deleteProduct(id)
    res.send({message: "deleted"});
});

router.get("/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let product = await getProduct(id);
        if (!product) {
            return res.status(404).send({ error: "Product not found" });
        }
        res.send(product);
    } catch (error) {
        res.status(500).send({ error: "Error fetching product" });
    }
});


router.get("/", async (req,res) => {
    let products = await getAllProducts();
    res.send(products);

});

module.exports = router;