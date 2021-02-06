const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardioSchema = new Schema({
  name: String,
  distance: Number,
  duration: Number
});

// Create Cardio model
const Cardio = mongoose.model("CardioWorkout", cardioSchema);

module.exports = Cardio;
