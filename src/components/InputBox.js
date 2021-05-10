import { Button } from 'bootstrap';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const InputBox = () => {
  return (
    <div>
      <form>
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
    </div>
  );
};

export default InputBox;
