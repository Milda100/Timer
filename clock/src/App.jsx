import { useState } from 'react'
import './App.css'
import Container from 'react-bootstrap/Container'
import TimeDisplay from './components/TimeDisplay'
import Break from './components/Break'
import Session from './components/Session'

function App() {
const [sessionTime, setSessionTime] = useState(25);
const [breakTime, setBreakTime] = useState(5);
const [isRunning, setIsRunning] = useState(false);

  return (
    <>
    <Container>
      <Break breakTime={breakTime} setBreakTime={setBreakTime} isRunning={isRunning} />
      <Session sessionTime={sessionTime} setSessionTime={setSessionTime} isRunning={isRunning} />
      <TimeDisplay 
      sessionTime={sessionTime} 
      setSessionTime={setSessionTime} 
      breakTime={breakTime} 
      setBreakTime={setBreakTime}
      setIsRunning={setIsRunning}
      isRunning={isRunning}
      />
    </Container>
    </>
  )
}

export default App
