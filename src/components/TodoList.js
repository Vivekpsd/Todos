import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TodoItem from './TodoItem';

export default function TodoList() {
  return (
    <div>
      <Container fluid className='filter-box'>
        <Row className='justify-content-center '>
          <Col md={2} sm={3}>
            <div className='filter-btn'>ALL</div>
          </Col>
          <Col md={2} sm={3}>
            <div className='filter-btn'>DONE</div>
          </Col>
          <Col md={2} sm={3}>
            <div className='filter-btn'>TODO</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <TodoItem />
          </Col>
        </Row>
        <Row className='justify-content-center delete-box'>
          <Col md={3} sm={12}>
            <div className='delete-btn'>Delete Completed </div>
          </Col>
          <Col md={3} sm={12}>
            <div className='delete-btn'>Delete All </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
