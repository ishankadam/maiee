const Product = require("../schema/product");
const Category = require("../schema/categories");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Testimonial = require("../schema/testimonials");
const Statistics = require("../schema/stats");
const parentDir = path.join(__dirname, "..");

// Set up storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let category;
    try {
      // Parse `req.body` based on whether it contains `products` or `categories`
      if (req.body.products) {
        const products = JSON.parse(req.body.products);
        category = Array.isArray(products)
          ? products[0].category
          : products.category;
      } else if (req.body.category) {
        category = "categories";
      } else if (req.body.testimonial) {
        category = "testimonial";
      } else {
        return cb(new Error("Either products or categories data is required"));
      }

      // Validate `category` existence
      if (!category) {
        return cb(new Error("Category is required"));
      }

      // Define and create the directory path
      const dir = path.join(parentDir, "uploads", category);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      cb(null, dir); // Set the directory as the destination
    } catch (error) {
      console.error("Error parsing data:", error);
      return cb(new Error("Invalid data format in request body"));
    }
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname); // Save file with its original name
  },
});

const upload = multer({ storage });

const create_product = async (req, res) => {
  try {
    // Parse the products data from the request body
    const productsData = JSON.parse(req.body.products); // Assuming it's a JSON string
    const images = req.files || []; // Safely get images

    // Validate the productsData structure
    if (!Array.isArray(productsData) || productsData.length === 0) {
      return res.status(400).send({
        error: "Invalid data format. Expecting an array of product objects.",
      });
    }

    // Generate a unique product ID for each product
    for (const file of images) {
      // Create a new product instance for each image
      const newCreatedProduct = new Product({
        productId: Math.floor(Math.random() * 9000000000) + 1,
        name: file.originalname.split(".").slice(0, -1).join("."),
        category: productsData[0].category,
        subcategory: productsData[0].subcategory,
        images: file.filename,
      });
      await newCreatedProduct.save();

      // Update statistics
    }
    const stats = await Statistics.findOne(); // Retrieve the first statistics document
    if (stats) {
      console.log(productsData.length);
      stats.patterns = (Number(stats.patterns) || 0) + productsData.length; // Increment patterns
      await stats.save(); // Save the updated stats document
    } else {
      // If no stats document exists, you may want to create one or log an error
      console.error("No stats document found. Consider initializing one.");
    }
    const products = await Product.find({}); // Fetch all products
    res.status(201).send(products); // Send a 201 Created response
  } catch (error) {
    console.log("Error while creating products:", error);
    res
      .status(500)
      .send({ error: "An error occurred while creating products." });
  }
};

const get_all_data = async (req, res) => {
  try {
    const product = await Product.find({})
      .select("-_id -__v") // Exclude _id and __v fields
      .sort({ createdAt: -1 }); // Sort by newest first

    res.status(200).json(product); // Send the result as JSON
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error });
  }
};
const get_all_categories = async (req, res) => {
  try {
    const category = await Category.find({}).select("-_id -__v"); // Exclude _id and __v fields
    res.status(200).json(category); // Send the result as JSON
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error });
  }
};

const delete_product = async (req, res) => {
  try {
    // Parse product from request body
    const deletedProduct = req.body.product;
    // Delete the product image from the server
    const imagePath = path.join(
      parentDir,
      "uploads",
      deletedProduct.category,
      deletedProduct.images[0]
    );

    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error("Error deleting image file:", err);
      } else {
        console.log("Image file deleted successfully");
      }
    });

    // Delete the product from the database
    await Product.deleteOne({ productId: Number(deletedProduct.productId) });

    // Fetch all products after deletion
    const allProducts = await Product.aggregate([{ $project: { _id: 0 } }]);
    const stats = await Statistics.findOne(); // Retrieve the first statistics document
    if (stats) {
      stats.patterns = (Number(stats.patterns) || 0) - 1; // Increment patterns
      await stats.save(); // Save the updated stats document
    } else {
      // If no stats document exists, you may want to create one or log an error
      console.error("No stats document found. Consider initializing one.");
    }
    // Send the updated list of products
    res.json(allProducts);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error deleting product" });
  }
};

const delete_category = async (req, res) => {
  try {
    // Parse Category from request body
    const deletedCategory = req.body.category;

    // Delete the Category image from the server
    const imagePath = path.join(
      parentDir,
      "uploads",
      "categories",
      deletedCategory.imgSrc
    );
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error("Error deleting image file:", err);
      } else {
        console.log("Image file deleted successfully");
      }
    });

    // Delete the Category from the database
    await Category.deleteOne({
      categoryId: Number(deletedCategory.categoryId),
    });

    // Fetch all Categorys after deletion
    const allCategories = await Category.aggregate([{ $project: { _id: 0 } }]);

    // Send the updated list of Categorys
    res.json(allCategories);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error deleting product" });
  }
};

const edit_product = async (req, res) => {
  try {
    const editData = JSON.parse(req.body.products); // Parse incoming product data
    const images = req.files; // Uploaded files with names

    // Destructure productId and prepare updated product data
    const { productId, ...editedProduct } = editData;
    const productToBeEdited = await Product.findOne({ productId: productId });
    const imagePath = path.join(
      parentDir,
      "uploads",
      productToBeEdited.category,
      productToBeEdited.images[0]
    );

    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error("Error deleting image file:", err);
      } else {
        console.log("Image file deleted successfully");
      }
    });
    // Check if productId is defined
    if (!productId) {
      return res.status(400).send({ error: "productId is required" });
    }

    // Prepare updatedProduct with name and images formatted accordingly
    const updatedProduct = {
      productId, // Ensure productId is included in the updated product data
      ...editedProduct,
      name: images[0].originalname.split(".").slice(0, -1).join("."), // name without extension
      images: images.map((image) => image.originalname), // images with extensions
    };

    // Replace or insert the product with upsert
    await Product.replaceOne({ productId: productId }, updatedProduct, {
      upsert: true,
    });

    // Retrieve all products excluding _id
    const allProducts = await Product.find({}, { _id: 0 });
    res.send(allProducts); // Send the updated product list
  } catch (error) {
    console.error("Error in edit_product:", error);
    res.status(400).send({ error: error.message });
  }
};

const create_category = async (req, res) => {
  try {
    // Parse the products data from the request body
    const categoryData = JSON.parse(req.body.category); // Assuming it's a JSON string
    const images = req.files || []; // Safely get images
    // Validate the productsData structure
    if (typeof categoryData !== "object" || categoryData === null) {
      return res.status(400).send({
        error: "Invalid data format. Expecting a product object.",
      });
    }
    const imgSrc =
      Array.isArray(images) && images.length > 0
        ? images[0].filename
        : images.filename;

    // Generate a unique product ID for each product
    const newCreatedCategory = new Category({
      categoryId: Math.floor(Math.random() * 9000000000) + 1,
      name: categoryData.name,
      description: categoryData.description,
      subcategories: categoryData.subcategories,
      imgSrc: imgSrc,
    });
    newCreatedCategory;
    await newCreatedCategory.save();

    const allCategory = await Category.find({});
    res.send(allCategory);
  } catch (error) {
    console.log("Error while creating products:", error);
    res
      .status(500)
      .send({ error: "An error occurred while creating products." });
  }
};

const edit_category = async (req, res) => {
  try {
    const editData = JSON.parse(req.body.category); // Parse incoming category data
    const { categoryId, ...editedCategory } = editData;
    const categoryToBeEdited = await Category.findOne({
      categoryId: categoryId,
    });
    const imagePath = path.join(
      parentDir,
      "uploads",
      "categories",
      categoryToBeEdited.imgSrc
    );
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error("Error deleting image file:", err);
      } else {
        console.log("Image file deleted successfully");
      }
    });
    // Check if req.files is an object (field names mapped to arrays) or an array directly
    const images = Array.isArray(req.files)
      ? req.files // If `req.files` is directly an array
      : req.files.imgSrc || []; // Access specific field name if `req.files` is an object

    // Prepare updatedCategory with name, images, and categoryId
    const updatedCategory = {
      categoryId, // Add categoryId to retain it in the document
      ...editedCategory,
      imgSrc: images.map((image) => image.originalname)[0], // Array of filenames
    };

    // Replace or insert the category with upsert
    await Category.replaceOne({ categoryId: categoryId }, updatedCategory, {
      upsert: true,
    });

    // Retrieve all categories excluding _id
    const allCategory = await Category.find({}, { _id: 0 });
    res.send(allCategory); // Send the updated category list
  } catch (error) {
    console.error("Error in edit_category:", error);
    res.status(400).send({ error: error.message });
  }
};

const getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({}, { _id: 0 }); // Exclude _id field
    res.status(200).send(testimonials);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    res
      .status(500)
      .send({ error: "An error occurred while fetching testimonials." });
  }
};

const delete_testimonial = async (req, res) => {
  try {
    // Parse testimonial from request body
    const deletedTestimonial = req.body.testimonial;

    // Delete the testimonial image from the server
    const imagePath = path.join(
      parentDir,
      "uploads",
      "testimonial",
      deletedTestimonial.image
    );
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error("Error deleting image file:", err);
      } else {
        console.log("Image file deleted successfully");
      }
    });

    // Delete the Category from the database
    await Testimonial.deleteOne({
      testimonialId: Number(deletedTestimonial.testimonialId),
    });

    // Fetch all Categorys after deletion
    const allTestimonials = await Testimonial.aggregate([
      { $project: { _id: 0 } },
    ]);

    // Send the updated list of Categorys
    res.json(allTestimonials);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error deleting product" });
  }
};

const create_testimonial = async (req, res) => {
  try {
    const testimonialData = JSON.parse(req.body.testimonial);
    const images = req.files || [];

    if (typeof testimonialData !== "object" || testimonialData === null) {
      return res.status(400).send({
        error: "Invalid data format. Expecting a product object.",
      });
    }
    const image =
      Array.isArray(images) && images.length > 0
        ? images[0].filename
        : images.filename;

    // Generate a unique product ID for each product
    const newCreatedtestimonial = new Testimonial({
      testimonialId: Math.floor(Math.random() * 9000000000) + 1,
      name: testimonialData.name,
      comments: testimonialData.comments,
      image: image,
    });
    await newCreatedtestimonial.save();

    const alltestimonial = await Testimonial.find({});
    res.send(alltestimonial);
  } catch (error) {
    console.log("Error while creating products:", error);
    res
      .status(500)
      .send({ error: "An error occurred while creating products." });
  }
};

const edit_testimonial = async (req, res) => {
  try {
    const editData = JSON.parse(req.body.testimonial); // Parse incoming category data
    const { testimonialId, ...editedTestimonial } = editData;
    const testimonialToBeEdited = await Testimonial.findOne({
      testimonialId: testimonialId,
    });
    const imagePath = path.join(
      parentDir,
      "uploads",
      "testimonial",
      testimonialToBeEdited.image
    );
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error("Error deleting image file:", err);
      } else {
        console.log("Image file deleted successfully");
      }
    });
    // Check if req.files is an object (field names mapped to arrays) or an array directly
    const images = Array.isArray(req.files)
      ? req.files // If `req.files` is directly an array
      : req.files.image || []; // Access specific field name if `req.files` is an object

    // Prepare updatedCategory with name, images, and categoryId
    const updatedTestimonial = {
      testimonialId, // Add categoryId to retain it in the document
      ...editedTestimonial,
      image: images.map((image) => image.originalname)[0], // Array of filenames
    };

    // Replace or insert the category with upsert
    await Testimonial.replaceOne(
      { testimonialId: testimonialId },
      updatedTestimonial,
      {
        upsert: true,
      }
    );

    // Retrieve all categories excluding _id
    const allTestimonial = await Testimonial.find({}, { _id: 0 });
    res.send(allTestimonial); // Send the updated category list
  } catch (error) {
    console.error("Error in edit_category:", error);
    res.status(400).send({ error: error.message });
  }
};

const getStats = async (req, res) => {
  try {
    const stats = await Statistics.find({}, { _id: 0 }); // Exclude _id field
    res.status(200).send(stats);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    res
      .status(500)
      .send({ error: "An error occurred while fetching testimonials." });
  }
};

module.exports = {
  get_all_data,
  create_product,
  get_all_categories,
  delete_product,
  delete_category,
  edit_product,
  create_category,
  edit_category,
  getAllTestimonials,
  delete_testimonial,
  create_testimonial,
  edit_testimonial,
  getStats,
  upload,
};
