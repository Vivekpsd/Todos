const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  class: {
    type: String,
    default: '',
  },
});

module.exports = Todos = mongoose.model('todos', TodoSchema);
