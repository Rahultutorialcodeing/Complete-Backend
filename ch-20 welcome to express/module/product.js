const { MongoClient, ObjectId } = require("mongodb");

let db = null;

MongoClient.connect(
  "mongodb+srv://rahul:1234RAHULpal@cluster0.9ff5t6e.mongodb.net/",
)
  .then((client) => {
    db = client.db("ecom");
    console.log("db connected!");
  })
  .catch((error) => {
    console.log("Failed to db connect with db");
    console.log(error.message);
    process.exit(1);
  });

const addProduct = async (req, res) => {
  const Product = db.collection("products");
  const payload = req.body;
  payload.createdAt = new Date();

  await Product.insertOne(payload);
  res.status(200).json(payload);
};

const getproduct = async (req, res) => {
  const Product = db.collection("products");
  const products = await Product.find().toArray();
  res.status(200).json(products);
};

const updateproduct = async (req, res) => {
  //   const query = req.query; // query data
  //   console.log(query);
  const { id } = req.params; // dynamic id
  const Product = db.collection("products");
  const payload = req.body;

  await Product.updateOne({ _id: new ObjectId(id) }, { $set: payload });
  res.status(200).json(payload);
};
const deletproduct = async (req, res) => {
  const { id } = req.params;
  const Product = db.collection("products");

  await Product.deleteOne({ _id: new ObjectId(id) });

  res.status(200).json({ message: "Data deleted Succesfully!" });
};

module.exports = {
  addProduct,
  getproduct,
  updateproduct,
  deletproduct,
};
