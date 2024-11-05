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
  designs: { type: String, required: true },
  patterns: { type: String, required: true },
  satisfiedClients: { type: String, required: true },
});

const Statistics = mongoose.model("Statistics", statisticSchema);

module.exports = Statistics;
