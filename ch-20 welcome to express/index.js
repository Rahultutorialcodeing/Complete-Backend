// const express = require("express");
// const app = express();

// app.listen(8000);
// // ab apka server satrt ho gya hai brawsor pe localhost likhiye (Cannot GET /) dekho node me agar res nhi bejte the to deafult me loding ghumta tha but expres  default me (/) ka requist  accept kiya hai or default me (Cannot GET /)  eska output diya ki koe enpoint nhi hai

// // => brawsor ke url se hmesha get req hota hai or brawor se app post req krna chahte ho to hmko me form tag hona chhaiye or http request hona chhiaye

// // express method ke liye fuction seta hai
// app.get('/product',(req,res)=>{
//     // res.send("Get req") // string formate
//     res.status(200).json("Get req")

// })

// app.post('/product',(req,res)=>{
//     res.status(200).json("Post req")
// })

// app.put('/product',(req,res)=>{
//     res.status(200).json("Put req")
// })

// app.delete('/product',(req,res)=>{
//     res.status(200).json("Delete req")
// })

// ........................


const express = require("express");
const app = express();
const {
  addProduct,
  getproduct,
  updateproduct,
  deletproduct,
} = require("./module/product");
app.listen(8000);

app.use(express.json()); // req.body me postman se json data aayega
app.use(express.urlencoded({ extended: false })); // x.ww.urlencoded esspe v deta allow hoga

app.post("/product", addProduct);
app.get("/product", getproduct);
// app.put("/product", updateproduct); http://localhost:8000/product?name=shirt&email=pal@gmail.com&phone=12672

app.put("/product/:id", updateproduct);
app.delete("/product/:id", deletproduct);
