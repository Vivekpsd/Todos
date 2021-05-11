const express = require('express');
const router = express.Router();

const Todos = require('../../models/Todos');

// Get Todo List
router.get('/getTodos', (req, res) => {
  Todos.find().then((Todo) => res.json(Todo));
});

// Add Todo Item
router.post('/addTodo', async (req, res) => {
  try {
    const newTodo = new Todos({
      task: req.body.task,
      class: '',
    });

    await newTodo.save().then((Todo) => res.json(Todo));
  } catch (err) {
    console.log(err.message);
  }
});

//Get Completed List

router.get('/getCompleted', (req, res) => {
  res.send('Completed Route');
});

//Get Incompleted List
router.get('/getInCompleted', (req, res) => {
  res.send('Incompleted Route');
});

//Delete Todo
router.delete('/delTodo/:id', (req, res) => {
  Todos.findByIdAndDelete(req.params.id).then(() => res.json({ remove: true }));
});

//Delete Todos
router.delete('/delTodos', (req, res) => {
  Todos.remove({}, () => {
    try {
      res.json({ removeAll: true });
    } catch (err) {
      console.log(err.message);
    }
  });
});

module.exports = router;
