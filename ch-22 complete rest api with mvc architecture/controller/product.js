const ProductModel = require("../model/product");

const creatProduct = async (req, res) => {
  try {
    const { title, desc, price, discount, brand } = req.body;

    const product = await ProductModel.create({
      title,
      desc,
      price,
      discount,
      brand,
    });

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const products = await ProductModel.find().exec();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, desc, price, discount, brand } = req.body;

    const product = await ProductModel.findById(id).exec();

    if (!product) return res.status(404).json({ message: "ID dos not exits." });

    product.title = title;
    product.desc = desc;
    product.price = price;
    product.discount = discount;
    product.brand = brand;

    const updatedProduct = await product.save();

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await ProductModel.findById(id).exec();

    if (!product) return res.status(404).json({ message: "ID dos not exits." });

    await product.deleteOne();
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  creatProduct,
  getProduct,
  updateProduct,
  deletProduct,
};
