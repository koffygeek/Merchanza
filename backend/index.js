const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const { log } = require("console");

app.use(express.json());
app.use(cors());

// Database Connection with MongoDB

mongoose.connect(
  "mongodb://koffiyvan:koffi123@ac-bojlmbr-shard-00-00.ntf1rpa.mongodb.net:27017,ac-bojlmbr-shard-00-01.ntf1rpa.mongodb.net:27017,ac-bojlmbr-shard-00-02.ntf1rpa.mongodb.net:27017/Merchanza?replicaSet=atlas-25ezse-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
);

// API Creation

app.get("/", (req, res) => {
  res.send("Express app is Running");
});

// Image storage engine

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// Creating endpoint for images
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

// schema for creating products

const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server is running on Port:  " + port);
  } else {
    console.log("Error: " + error);
  }
});
