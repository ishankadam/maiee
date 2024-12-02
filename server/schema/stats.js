const mongoose = require("mongoose");

const statisticSchema = new mongoose.Schema({
  statId: {
    type: Number,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return typeof v === "number"; // Ensure it's a number
      },
      message: "Value must be a number",
    },
  },
  designs: { type: Number, required: true },
  patterns: { type: Number, required: true },
  satisfiedClients: { type: Number, required: true },
});

const Statistics = mongoose.model("Statistics", statisticSchema);

module.exports = Statistics;
