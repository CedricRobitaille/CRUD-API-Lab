const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");


mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to  MongoDB ${mongoose.connection.name}.`)
});

app.use(express.json());

const cors = require("cors")
app.use(cors());

const Application = require("./models/application.js")


// Create - /api/applications
app.post("/api/applications", async (req, res) => {
  try {
    const newApplication = await Application.create(req.body);
    res.status(201).json({ newApplication });
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
});

// Read - /api/applications
app.get("/api/applications", async (req, res) => {
  try {
    const applications = await Application.find();
    res.status(200).json({ applications });
  } catch (error) {
    res.status(400).json({ message: error.message})
  }
});

// Update - /api/applications/:appId
app.put("/api/applications/:appId", async (req, res) => {
  try {
    const updatedApplication = await Application.findByIdAndUpdate(req.params.appId, req.body, { new: true});
    res.status(200).json({ updatedApplication });
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
});


// Listen to port 3000
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})