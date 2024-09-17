const mongoose = require("mongoose");

// สร้าง Schema สำหรับ Category
const categorySchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
});

// สร้างโมเดล Category
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
