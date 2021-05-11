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

// Update Todo Item

router.post('/updateTodo/:id', async (req, res) => {
  let todoItem = await Todos.findById(req.params.id);

  if (!todoItem.completed) {
    //update
    try {
      todoItem = await Todos.updateOne(
        { _id: req.params.id },
        {
          $set: {
            completed: true,
            class: 'striked',
          },
        }
      );
      return res.json(todoItem);
    } catch (err) {
      console.log(err.message);
    }
  } else {
    try {
      todoItem = await Todos.updateOne(
        { _id: req.params.id },
        {
          $set: {
            completed: false,
            class: '',
          },
        }
      );
      return res.json(todoItem);
    } catch (err) {
      console.log(err.message);
    }
  }
});

//Get Completed List

router.get('/getCompleted/:id', async (req, res) => {});

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
  Todos.deleteMany({}, () => {
    try {
      res.json({ removeAll: true });
    } catch (err) {
      console.log(err.message);
    }
  });
});

// Delete Completed Todos
router.delete('/delCompletedTodos', (req, res) => {
  Todos.deleteMany({ completed: true }, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
