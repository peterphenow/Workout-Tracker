const db = require("../models");

module.exports = function (app) {
  // app.put to add exercise to DB(when complete and add exercise is clicked)
  app.put("/api/workouts/:id", (req, res) => {
    // console.log("-PUT /api/workouts/:id??? params", req.params.id);
    // console.log("req.body ===", req.body);
    let id = req.params.id;
    let currentExercises = [];

    // first, we need to find the current ID and pull the exercises out
    db.Workout.find({ _id: id }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        // this sets currentExercises = an array of all exercises in this workout
        currentExercises = data[0].exercises;

        // console.log("***req.body***", req.body);
        // console.log("***currentExercises***", currentExercises);

        // this will push the new workout to the array of currentExercises
        currentExercises.push(req.body);
        // console.log("****POST PUSH*****", currentExercises);

        // then we can find by ID and update with the new array containing all the exercises
        db.Workout.findByIdAndUpdate({ _id: req.params.id }, { exercises: currentExercises }, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Success!!!", data);
            res.json(data);
          }
        });
      }
    });
  });

  // called when continue workout is clicked
  app.post("/api/workouts/", (req, res) => {
    // console.log("-POST /api/workouts/???", req.body);
    db.Workout.create(req.body, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        res.send(data);
      }
    });
  });

  // called when the stats page is opened
  app.get("/api/workouts/range", (req, res) => {
    // console.log("/api/workouts/range???", req.body);
    db.Workout.find({}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(data);
        res.json(data);
      }
    });
  });

  //when home page is loaded
  app.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([{ $addFields: { totalDuration: { $sum: "$exercises.duration" } } }]).then((data) => {
      res.json(data);
    });
    // console.log("-GET /api/workouts??? home page loaded", req.body);
    // db.Workout.find({}, (err, data) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     // console.log(data);
    //     res.json(data);
    //   }
    // });
  });
};
