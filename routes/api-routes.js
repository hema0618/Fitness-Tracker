const db = require("../models");


module.exports = function (app) {

    //Workouts
    app.get("/api/workouts", (req, res) => {

        db.Workout.find({}).then(dbWorkout => {
            console.log("ALL WORKOUTS");
            console.log(dbWorkout);
            dbWorkout.forEach(workout => {
                var total = 0;
                workout.exercises.forEach(e => {
                    total += e.duration;
                });
                workout.totalDuration = total;

            });

            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    });

    // add exercise
    app.put("/api/workouts/:id", (req, res) => {

        db.Workout.findOneAndUpdate(
            { _id: req.params.id },
            {
                $inc: { totalDuration: req.body.duration },
                $push: { exercises: req.body }
            },
            { new: true }).then(dbWorkout => {
                res.json(dbWorkout);
            }).catch(err => {
                res.json(err);
            });

    });

    //create workout
    app.post("/api/workouts", ({ body }, res) => {
        console.log("WORKOUT TO BE ADDED");
        console.log(body);

        db.Workout.create(body).then((dbWorkout => {
            res.json(dbWorkout);
        })).catch(err => {
            res.json(err);
        });
    });

    // get workouts 
    app.get("/api/workouts/range", (req, res) => {

        db.Workout.find({}).then(dbWorkout => {
            console.log("ALL WORKOUTS");
            console.log(dbWorkout);

            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });

    });


}




// const router = require("express").Router();
// const Transaction = require("../models/transaction.js");

// router.post("/api/transaction", ({ body }, res) => {
//   Transaction.create(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.post("/api/transaction/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.get("/api/transaction", (req, res) => {
//   Transaction.find({})
//     .sort({ date: -1 })
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// module.exports = router;
