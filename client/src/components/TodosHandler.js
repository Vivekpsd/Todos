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
    this.checkItem = this.checkItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  async componentDidMount() {
    await axios
      .get('/getTodos')
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
      await axios.post('/addTodo', newTodo);

      await axios
        .get('/getTodos')
        .then((res) => this.setState({ todos: res.data }));
    }
  };

  deleteItem = async (key) => {
    await axios.delete(`/delTodo/${key}`);

    await axios
      .get('/getTodos')
      .then((res) => this.setState({ todos: res.data }));
  };

  checkItem = (key) => {
    alert('Todo');
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addTodo}>
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
          <FilterButtons />

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
              checkItem={this.checkItem}
            />
          )}

          <Row className='justify-content-center delete-box'>
            <Col md={3} sm={12}>
              <div className='delete-btn'>Delete Completed </div>
            </Col>
            <Col md={3} sm={12}>
              <div className='delete-btn'>Delete All </div>
            </Col>
          </Row>
        </center>
      </div>
    );
  }
}

export default TodosHandler;
