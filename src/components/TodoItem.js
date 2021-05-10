import React from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';

export default function TodoItem(props) {
  const items = props.items;
  return (
    <div className='todo-item-box'>
      <Container fluid className='filter-box'>
        Todo List
        <Row className='justify-content-center '>
          <Col md={6}>
            <hr></hr>
            {items.map((item) => {
              return (
                <Card className='todo-item' key={item.key}>
                  <span>
                    {item.text}
                    <AiFillDelete className='del-icon' />
                  </span>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
