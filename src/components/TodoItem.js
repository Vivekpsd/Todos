import React from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';

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
                <Card className='todo-item ' key={item.key}>
                  <span>
                    <input
                      type='text'
                      value={item.text}
                      onChange={(e) =>
                        props.setUpdate(e.target.value, item.key)
                      }
                    />
                    <AiFillDelete
                      className='del-icon'
                      onClick={() => props.deleteItem(item.key)}
                    />
                    <FaCheck
                      className='check-icon'
                      onClick={() => props.completeItem(item.key)}
                    />
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
