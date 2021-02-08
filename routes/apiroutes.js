const db = require("../models");

module.exports = function (app) {
  // app.put to add exercise to DB(when complete and add exercise is clicked)
  app.put("/api/workouts/:id", ({ params }, res) => {
    console.log("-PUT /api/workouts/:id??? params", params.id);
  });

  // called when new workout or continue workout is clicked
  app.post("/api/workouts/", (req, res) => {
    console.log("-POST /api/workouts/???", req.body);
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
    // console.log("-GET /api/workouts??? home page loaded", req.body);
    db.Workout.find({}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(data);
        res.json(data);
      }
    });
  });
};
