import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import path from "path";
dotenv.config();

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

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    const normalized = origin.replace(/\/$/, "");
    if (allowedOrigins.includes(normalized)) callback(null, true);
    else {
      console.log(`Blocked by CORS: ${origin}`);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Origin", "Accept"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // important to handle preflight early
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGODB_URL);
mongoose.connection.on("connected", () => console.log("Mongoose connected"));

import ProductRoutes from "./routes/events.js";
app.use("/api", ProductRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({ message: error.message });
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
