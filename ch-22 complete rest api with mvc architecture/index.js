const dotenv = require("dotenv");
dotenv.config(); // ye line read krta hai env file me se
// console.log(process.env.DB_URL)

const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL);

const express = require("express");
// const morgan = require("morgan"); //  ye batat hai ki kon se methow or kon se endpoint se req aaya hai terminal me
const { getProduct, creatProduct, updateProduct, deletProduct } = require("./controller/product");
const app = express();

app.listen(process.env.PORT);

// app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.post('/product',creatProduct)
app.get('/product',getProduct)
app.put('/product/:id',updateProduct)
app.delete('/product/:id',deletProduct)


