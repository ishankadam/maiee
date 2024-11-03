const mongoose = require("mongoose");

// Define the schema
const productSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return typeof v === "number"; // Ensure it's a number
      },
      message: "Value must be a number",
    },
  },
  name: {
    type: String,
    required: true, // Make name required
  },
  category: {
    type: String,
    required: true, // Make category required
  },
  subcategory: {
    type: String,
    required: true, // Make subcategory required
  },
  images: {
    type: [String], // Change to an array of strings for multiple images
    required: true, // Make it required to have at least one image URL
  },
});

// Create the model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
