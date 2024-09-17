const mongoose = require("mongoose");

// สร้าง Schema สำหรับ Brand (ไม่ใช่ Category)
const brandSchema = new mongoose.Schema({
    id: Number,
    name: String,
});

// สร้างโมเดล Brand
const Brand = mongoose.model("brands", brandSchema);

module.exports = Brand;
