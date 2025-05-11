
import './App.css'
import Container from 'react-bootstrap/Container'
import TimeDisplay from './components/TimeDisplay'

function App() {

  return (
    <>
    <Container>
    <label id="break-label" htmlFor="break-length">Break Time</label>
    <button id="break-decrement">Break ↓</button>
    <div id="break-length">5</div>
    <button id="break-increment">Break ↑</button>

    <label id="session-label" htmlFor="session-length">Session Time</label>
    <button id="session-decrement">Session ↓</button>
    <div id="session-length">25</div>
    <button in="session-increment">Session ↑</button>
    <TimeDisplay initialTime={1500}/>
    </Container>
    </>
  )
}

export default App
