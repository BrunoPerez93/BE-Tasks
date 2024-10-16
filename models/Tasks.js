const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

taskSchema.methods.formatDate = function () {
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  return this.date.toLocaleDateString("en-GB", options);
};

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
