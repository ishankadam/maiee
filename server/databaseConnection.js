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
  "https://maieelace.onrender.com",
  "https://maieelace.vercel.app",
  "https://maieelace.netlify.app",
  "https://maieelace.com",
];

// ✅ CORS options with origin normalization and logging
const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    const normalizedOrigin = origin.replace(/\/$/, "");

    if (allowedOrigins.includes(normalizedOrigin)) {
      callback(null, true);
    } else {
      console.log(`CORS blocked origin: ${origin}`);
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "Accept",
    "Origin",
  ],
  credentials: true,
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};
// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.json()); // Only need to call this once

// Handle preflight requests
app.options("*", cors(corsOptions));

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
