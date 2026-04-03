const {Schema,model}=require("mongoose")

const productSchema=new Schema({
    title:String,
    desc:String,
    price:Number,
    discount:Number,
    brand:String
},{timestamps:true})

const ProductModel= model("Product",productSchema)

module.exports=ProductModel