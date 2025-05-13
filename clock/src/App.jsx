import { store } from './redux/store'
import { Provider } from 'react-redux'
import './App.css'
import Container from 'react-bootstrap/Container'
import TimeDisplay from './components/TimeDisplay'
import Break from './components/Break'
import Session from './components/Session'

function App() {
    return (
        <Provider store={store}>
            <Container>
                <Break />
                <Session />
                <TimeDisplay />
            </Container>
        </Provider>
    );
}

export default App
