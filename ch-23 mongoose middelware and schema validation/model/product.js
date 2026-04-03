const { Schema, model, Types } = require("mongoose");

// chatgpt:- regular express for email validation for js test  function
const validateEmail = (email) => {
  const pattern = /^[a-zA]$/;
  pattern.test(email);

  return;
};
const productSchema = new Schema(
  {
    email: {
      Type: String,
      required: true,
      //   validate: {
      //     validator: validateEmail,
      //     message: "Invaild email",
      //   }, // complex task perform krne ke liye ye use kro

      match: [/^[a-zA]$/, "Invaild email"],
    },
    title: {
      Type: String,
      required: [true, "title is required"],
      trim: true,
      lowerCase: true,
      maxlength: 150,
    },
    desc: {
      Type: String,
      required: true,
      trim: true,
      lowerCase: true,
      maxlength: 150,
    },
    price: {
      Type: Number,
      required: true,
    },
    discount: {
      Type: Number,
      default: null,
    },
    brand: {
      Type: String,
      default: null,
      trim: true,
      lowerCase: true,
    },
    status: {
      type: String,
      enum: ["draft", "block", "pending"],
      default: "draft",
    },
  },
  { timestamps: true },
);

productSchema.pre("save", async function (next) {
  const count = await model("Product").countDocuments({ email: this.email });

  if (count > 0) {
    throw next(new Error("Email already exist"));
  }

  next();
});

const ProductModel = model("Product", productSchema);

module.exports = ProductModel;
