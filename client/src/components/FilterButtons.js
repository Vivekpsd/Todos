import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function FilterButtons(props) {
  return (
    <div>
      <Container fluid className='filter-box'>
        <Row className='justify-content-center '>
          <Col md={2} sm={3}>
            <div className='filter-btn' onClick={() => props.getAllItems()}>
              ALL
            </div>
          </Col>
          <Col md={2} sm={3}>
            <div
              className='filter-btn'
              onClick={() => props.getCompletedItems()}
            >
              DONE
            </div>
          </Col>
          <Col md={2} sm={3}>
            <div
              className='filter-btn'
              onClick={() => props.getNotCompletedItems()}
            >
              TODO
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
