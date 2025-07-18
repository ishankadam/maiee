const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5001;

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://maiee.onrender.com",
];

// ✅ CORS options with origin normalization and logging
const corsOptions = {
  origin: (origin, callback) => {
    const normalizedOrigin = origin?.replace(/\/$/, "");

    if (!origin || allowedOrigins.includes(normalizedOrigin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.json()); // Only need to call this once

// MongoDB Connection
const uri = process.env.MONGODB_URL;
mongoose.connect(uri, {});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!");
});

const ProductRoutes = require("./routes/events");
app.use("/api", ProductRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Static files
app.use(express.static("uploads"));

// Error handling
app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong.";
  res.status(status).json({ message: message });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is starting at ${PORT}`);
});
