import { useDispatch, useSelector } from 'react-redux';
import { setBreakTime } from '../redux/store';
import { Container, Row, Col } from 'react-bootstrap';


const Break = () => {
  const breakTime = useSelector(state => state.timer.breakTime);
  const isRunning = useSelector(state => state.timer.isRunning);
  const dispatch = useDispatch();

  return (
    <>
    <Container>
      <label id="break-label" htmlFor="break-length">Break Time</label>
      <Row className="align-items-center justify-content-center">
        <Col xs="auto">
            <button 
            id="break-decrement" 
            disabled={isRunning} 
            onClick={() => dispatch(setBreakTime(Math.max(breakTime - 1, 1)))}
            >↓</button>
        </Col>
        <Col xs="auto">
            <h1 id="break-length">{breakTime}</h1>
        </Col>
        <Col xs="auto">
            <button 
            id="break-increment" 
            disabled={isRunning} 
            onClick={() => dispatch(setBreakTime(Math.min(breakTime + 1, 60)))}
            >↑</button>
        </Col>
      </Row>
    </Container>
    </>
  );
};


export default Break;