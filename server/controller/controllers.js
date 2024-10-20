const Product = require("../schema/product");
const get_all_data = async (req, res) => {
  try {
    const product = await Product.find({}); // Fetch all events
    res.status(200).json(product); // Send the result as JSON
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error });
  }
};

const create_product = async (req, res) => {
  try {
    const productsData = req.body.products;
    const newProducts = [];
    console.log(productsData);

    // Validate input format
    if (!Array.isArray(productsData)) {
      return res.status(400).send({
        error: "Invalid data format. Expecting an array of products.",
      });
    }

    // Iterate over the array of products and create new product instances
    for (const productData of productsData) {
      const newProductId = Math.floor(Math.random() * 9000000000) + 1;

      const newCreatedProduct = new Product({
        productId: newProductId,
        name: productData.name,
        category: productData.category,
        subcategory: productData.subcategory,
        image: productData.image, // Corrected from 'subcategory.image' to 'productData.image'
      });

      // Save the new product
      await newCreatedProduct.save();
      newProducts.push(newCreatedProduct); // Keep track of created products
    }

    // Optionally return all products or just the newly created ones
    const allProducts = await Product.aggregate([{ $project: { _id: 0 } }]);
    res.send(allProducts);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

module.exports = {
  get_all_data,
  create_product,
};
