import { useDispatch, useSelector } from 'react-redux';
import { setSessionTime } from '../redux/store';
import { Container, Row, Col } from 'react-bootstrap';

const Session = () => {
    const sessionTime = useSelector(state => state.timer.sessionTime);
    const isRunning = useSelector(state => state.timer.isRunning);
    const dispatch = useDispatch();

    return (
        <>
        <Container>
            <label id="session-label" htmlFor="session-length">Session Time</label>
            <Row className="align-items-center justify-content-center">
                <Col xs="auto">
                    <button 
                    id="session-decrement" 
                    disabled={isRunning} 
                    onClick={() => dispatch(setSessionTime(Math.max(sessionTime - 1, 1)))}
                    >↓</button>
                </Col>
                <Col xs="auto">
                    <h1 id="session-length">{sessionTime}</h1>
                </Col>
                <Col xs="auto">
                    <button 
                    id="session-increment" 
                    disabled={isRunning} 
                    onClick={() => dispatch(setSessionTime(Math.min(sessionTime + 1, 60)))}
                    >↑</button>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Session;