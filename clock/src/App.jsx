import { useState } from 'react'
import './App.css'
import Container from 'react-bootstrap/Container'
import TimeDisplay from './components/TimeDisplay'
import Break from './components/Break'
import Session from './components/Session'

function App({breakTime, setBreakTime}) {


  return (
    <>
    <Container>
    <Break breakTime={breakTime} setBreakTime={setBreakTime} />
      <Session sessionTime={1500} />
    <TimeDisplay sessionTime={1500} breakTime={breakTime}/>
    </Container>
    </>
  )
}

export default App
