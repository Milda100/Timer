
import './App.css'

function App() {

  return (
    <>
    <label id="break-label">Break Time</label>
    <div id="break-length">5</div>
    <button id="break-decrement">Break ↓</button>
    <button id="break-increment">Break ↑</button>
    <label id="session-label">Session Time</label>
    <div id="session-length">25</div>
    <button id="session-decrement">Session ↓</button>
    <button in="session-increment">Session ↑</button>
    <label id="timer-label">Timer</label>
    <div id="time-left">mm:ss</div>
    <button id="pause">pause</button>
    <button id="play">play</button>
    <button id="reset">Reset</button>
    </>
  )
}

export default App
