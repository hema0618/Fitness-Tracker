const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
      },
      exercises: [
        {
          type: {
            type: String,
            trim: true,
          },
          name: {
            type: String,
            trim: true,
            required: "Enter a name for Workout",
          },
          duration: Number,
          weight: {
            type: Number,
            default: 0
          },
          reps: {
            type: Number,
            default: 0
          },
          sets: {
            type: Number,
            default: 0
          },
          distance: {
            type: Number,
            default: 0
          }
        }
      ],
      totalDuration: {
        type: Number,
        default: 0,
      }
    

})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;


// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const transactionSchema = new Schema({
//   name: {
//     type: String,
//     trim: true,
//     required: "Enter a name for transaction"
//   },
//   value: {
//     type: Number,
//     required: "Enter an amount"
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   }
// });

// const Transaction = mongoose.model("Transaction", transactionSchema);

// module.exports = Transaction;