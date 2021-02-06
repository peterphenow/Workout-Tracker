const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
  name: String,
  weight: Number,
  sets: Number,
  reps: Number,
  duration: Number
});

// Create Cardio model
const Resistance = mongoose.model("ResistanceWorkout", resistanceSchema);

module.exports = Resistance;
