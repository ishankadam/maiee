const express = require("express");
const cors = require("cors");
const router = express.Router();
const controller = require("../controller/controllers");
const corsOptions = {
  origin: [
    `http://localhost:3000`,
    `http://localhost:3001, http://3.7.55.16:3000`,
  ], // Your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

router.use(cors(corsOptions)); // Apply CORS middleware
router.use(express.json()); // Middleware to parse JSON request bodies

// Routes
router.get("/getData", controller.get_all_data);
router.get("/getCategories", controller.get_all_categories);
router.post(
  "/createProduct",
  controller.upload.array("images"),
  controller.create_product
);
router.put(
  "/editProduct",
  controller.upload.array("images"),
  controller.edit_product
);
router.delete("/deleteProduct", controller.delete_product);
router.post(
  "/createCategory",
  controller.upload.array("imgSrc"),
  controller.create_category
);
router.delete("/deleteCategory", controller.delete_category);
router.put(
  "/editCategory",
  controller.upload.array("imgSrc"),
  controller.edit_category
);
router.get("/testimonials", controller.getAllTestimonials);
router.post(
  "/createTestimonial",
  controller.upload.array("image"),
  controller.create_testimonial
);
router.delete("/deleteTestimonial", controller.delete_testimonial);
router.put(
  "/editTestimonial",
  controller.upload.array("image"),
  controller.edit_testimonial
);
router.get("/stats", controller.getStats);
// Error handling middleware
router.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong.";
  res.status(status).json({ message: message });
});

module.exports = router;
