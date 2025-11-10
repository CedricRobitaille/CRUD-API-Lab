const Application = require("../models/application.js")




// Read - /api/applications
const index = async (req, res) => {
  try {
    const applications = await Application.find();
    res.status(200).json( applications );
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const show = async (req, res) => {
  try {
    const application = await Application.findById(req.params.appId);
    res.status(200).json( application );
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

// Create - /api/applications
const create = async (req, res) => {
  try {
    const newApplication = await Application.create(req.body);
    if (!newApplication) {
      throw new Error("Could not create a new entry")
    }
    res.status(201).json( newApplication );
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Update - /api/applications/:appId
const update = async (req, res) => {
  try {
    const updatedApplication = await Application.findByIdAndUpdate(req.params.appId, req.body, { new: true });
    res.status(200).json( updatedApplication );
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Delete - /api/applications/:appId
const del = async (req, res) => {
  try {
    const deletedApplication = await Application.findByIdAndDelete(req.params.appId);
    if (!newApplication) {
      throw new Error(`Could not delete entry: ${req.params.appId}`)
    }
    console.log("deleted entry: ", deletedApplication)
    res.status(200).json({ deletedApplication });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

module.exports = {
  index,
  show,
  create,
  update,
  del,
}