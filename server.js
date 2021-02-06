const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout_db", { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

// // works to create a new document in the cardioworkouts collection
// const cardio = new db.Cardio({
//   name: "Walk",
//   distance: 1,
//   duration: 20
// });

// cardio.save();

// // works to create a new document in the resistanceworkouts collection
// const resistance = new db.Resistance({
//   name: "bench press",
//   weight: 150,
//   sets: 5,
//   reps: 10,
//   duration: 20
// });

// resistance.save();
