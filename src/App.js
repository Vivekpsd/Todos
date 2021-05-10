import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import InputBox from './components/InputBox';

function App() {
  return (
    <div className='header'>
      <Container>
        <Row>
          <Col xs={12}>
            <center>
              <h1 className='main-head'>Todos</h1>
            </center>
            <InputBox />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
