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
  console.log(`Server listening on: http://localhost:${PORT} !`);
});

// // works to create a new document in the workouts collection
// const cardio = new db.Workout({
//   day: new Date().setDate(new Date().getDate() - 7),
//   exercises: [
//     {
//       type: "cardio",
//       name: "Running",
//       duration: 25,
//       distance: 4
//     }
//   ]
// });

// cardio.save();

// // works to create a new document in the workouts collection
// const resistance = new db.Workout({
//   day: new Date().setDate(new Date().getDate() - 10),
//   exercises: [
//     {
//       type: "resistance",
//       name: "Bicep Curl",
//       duration: 20,
//       weight: 100,
//       reps: 10,
//       sets: 4
//     }
//   ]
// });

// resistance.save();
