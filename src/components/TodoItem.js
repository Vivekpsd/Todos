import React from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';

export default function TodoItem() {
  return (
    <div className='todo-item-box'>
      <Container fluid className='filter-box'>
        Todo List
        <Row className='justify-content-center '>
          <Col md={6}>
            <hr></hr>
            <Card className='todo-item'>Hello</Card>
            <Card className='todo-item'>Hello</Card>
            <Card className='todo-item'>Hello</Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
