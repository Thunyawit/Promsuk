const expores = require("express");
const mongoose = require("mongoose");
const app = expores();
const port = 4000;
const catagoryRoutes= require("./routes/catagory");
const brandRoutes= require("./routes/brand");
const productRouters = require("./routes/product");



app.use(expores.json());
app.get("/",(req, res)=>{
    res.send("Server running");
});
app.use("/catagory",catagoryRoutes);
app.use("/brand",brandRoutes);
app.use("/product",productRouters)
async function connectDb(){
    await mongoose.connect("mongodb://localhost:27017",{
        dbName:"Promsuk",
    });
    console.log("mongodb connected");
}
connectDb().catch((err)=>{
    console.error(err);
})
app.listen(port,()=>{
    console.log("Server running on port", port);
});