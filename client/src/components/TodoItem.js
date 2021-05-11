import React from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';
import Zoom from 'react-reveal/Zoom';

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
                <Zoom duration={200}>
                  <Card className='todo-item'>
                    <span>
                      <input
                        type='text'
                        value={item.task}
                        className={item.class}
                        onChange={() => props.setUpdate(item._id)}
                      />
                      <AiFillDelete
                        className='del-icon'
                        onClick={() => props.deleteItem(item._id)}
                      />
                      <FaCheck
                        className='check-icon'
                        onClick={() => props.checkedItem(item._id)}
                      />
                    </span>
                  </Card>
                </Zoom>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
