import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TodoItem from './TodoItem';
import TodoList from './TodoList';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: '',
        completed: '',
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.completeItem = this.completeItem.bind(this);
  }

  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
        completed: false,
      },
    });
  };

  addItem = (e) => {
    e.preventDefault();

    const newItem = this.state.currentItem;
    if (newItem.text !== '') {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: '',
          completed: '',
        },
      });
    }
  };

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  };

  deleteAllItem = (key) => {
    this.setState({
      items: [],
    });
  };

  setUpdate = (value, key) => {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = value;
      }
    });

    this.setState({
      items: items,
    });
  };

  completeItem = (key) => {
    let newValue = '';
    this.state.items.map((item) => {
      if (item.key === key) {
        item.completed = true;
        newValue = item.text
          .split('')
          .map((char) => char + '\u0336')
          .join('');
      }
    });

    const items = this.state.items;
    items.map((item) => {
      if (item.key === key && item.completed === true) {
        item.text = newValue;
      }
    });

    this.setState({
      items: items,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addItem}>
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
                    value={this.state.currentItem.text}
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
          <TodoList />
          <TodoItem
            items={this.state.items}
            deleteItem={this.deleteItem}
            setUpdate={this.setUpdate}
            completeItem={this.completeItem}
          />
          <Row className='justify-content-center delete-box'>
            <Col md={3} sm={12}>
              <div className='delete-btn'>Delete Completed </div>
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

export default InputBox;
