import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
    console.log(newItem);
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
          <TodoList items={this.state.items} />
        </center>
      </div>
    );
  }
}

export default InputBox;
