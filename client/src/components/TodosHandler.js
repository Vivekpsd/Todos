import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TodoItem from './TodoItem';
import FilterButtons from './FilterButtons';
import axios from 'axios';

class TodosHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          task: '',
          completed: '',
          date: '',
          class: '',
        },
      ],
      currentTodo: {
        task: '',
        completed: false,
        class: '',
      },
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.checkedItem = this.checkedItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteAllItem = this.deleteAllItem.bind(this);
    this.deleteCompletedItem = this.deleteCompletedItem.bind(this);
    this.getCompletedItems = this.getCompletedItems.bind(this);
    this.getNotCompletedItems = this.getNotCompletedItems.bind(this);
    this.getAllItems = this.getAllItems.bind(this);
  }

  async componentDidMount() {
    await axios
      .get('/api/Todos/getTodos')
      .then((res) => this.setState({ todos: res.data }));
  }

  handleInput = (e) => {
    this.setState({
      currentTodo: {
        task: e.target.value,
        completed: false,
        class: '',
      },
    });
  };

  addTodo = async (e) => {
    e.preventDefault();
    const newTodo = this.state.currentTodo;
    if (newTodo.task !== '') {
      await axios.post('/api/Todos/addTodo', newTodo);

      await axios
        .get('/api/Todos/getTodos')
        .then((res) => this.setState({ todos: res.data }));
    }

    this.setState({
      currentTodo: {
        task: '',
        completed: false,
        class: '',
      },
    });
    document.getElementById('myForm').reset();
  };

  deleteItem = async (key) => {
    await axios.delete(`/api/Todos/delTodo/${key}`);

    await axios
      .get('/api/Todos/getTodos')
      .then((res) => this.setState({ todos: res.data }));
  };

  deleteCompletedItem = async () => {
    await axios.delete('/api/Todos/delCompletedTodos/');
    await axios
      .get('/api/Todos/getTodos')
      .then((res) => this.setState({ todos: res.data }));
  };

  checkedItem = async (key) => {
    await axios.post(`/api/Todos/updateTodo/${key}`);

    await axios
      .get('/api/Todos/getTodos')
      .then((res) => this.setState({ todos: res.data }));
  };

  deleteAllItem = async () => {
    await axios.delete('/api/Todos/delTodos');

    await axios
      .get('/api/Todos/getTodos')
      .then((res) => this.setState({ todos: res.data }));
  };

  // Filtering

  getCompletedItems = async () => {
    await axios
      .get('/api/Todos/getTodos')
      .then((res) => this.setState({ todos: res.data }));

    let allTodos = this.state.todos.filter((todo) => todo.completed !== false);

    this.setState({ todos: allTodos });
  };

  getNotCompletedItems = async () => {
    await axios
      .get('/api/Todos/getTodos')
      .then((res) => this.setState({ todos: res.data }));

    let allTodos = this.state.todos.filter((todo) => todo.completed === false);

    this.setState({ todos: allTodos });
  };

  getAllItems = async () => {
    await axios
      .get('/api/Todos/getTodos')
      .then((res) => this.setState({ todos: res.data }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addTodo} id='myForm'>
          <Container>
            <Row className='justify-content-center align-items-center'>
              <Col xl={3} md={0}></Col>
              <Col xl={4} sm={10}>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control task-input'
                    name='task'
                    id='task'
                    placeholder='Enter Task Here'
                    value={this.state.currentTodo.text}
                    onChange={this.handleInput}
                  ></input>
                </div>
              </Col>
              <Col xl={2} sm={2}>
                <button type='submit' className='btnSubmit btn-form-submit'>
                  ADD
                </button>
              </Col>
              <Col xl={2} md={0}></Col>
            </Row>
          </Container>
        </form>
        <center>
          <FilterButtons
            getCompletedItems={this.getCompletedItems}
            getNotCompletedItems={this.getNotCompletedItems}
            getAllItems={this.getAllItems}
          />

          {this.state.todos.length === 0 ? (
            <div>
              <Container fluid className='filter-box'>
                <Row className='justify-content-center '>
                  <Col md={6}>
                    <div className='alert alert-success alert-msg'>
                      No Task Pending. Enjoy Your Free Time!
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          ) : (
            <TodoItem
              items={this.state.todos}
              deleteItem={this.deleteItem}
              checkedItem={this.checkedItem}
            />
          )}

          <Row className='justify-content-center delete-box'>
            <Col md={3} sm={12}>
              <div className='delete-btn' onClick={this.deleteCompletedItem}>
                Delete Completed{' '}
              </div>
            </Col>
            <Col md={3} sm={12}>
              <div className='delete-btn' onClick={this.deleteAllItem}>
                Delete All{' '}
              </div>
            </Col>
          </Row>
        </center>
      </div>
    );
  }
}

export default TodosHandler;
