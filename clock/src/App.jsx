import { store } from './redux/store'
import { Provider } from 'react-redux'
import './App.css'
import TimeDisplay from './components/TimeDisplay'
import Break from './components/Break'
import Session from './components/Session'
import { Container, Row, Col } from 'react-bootstrap'

function App() {
    return (
        <Provider store={store}>
            <Container>
                <h1 id="title">Work Timer</h1>
                <Row>
                    <Col md={6}>
                        <Break />
                    </Col>
                    <Col md={6}>
                        <Session />
                    </Col>
                </Row>
                <TimeDisplay />
            </Container>
        </Provider>
    );
}

export default App
