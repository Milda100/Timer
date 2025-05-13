
const Session = ({sessionTime, setSessionTime, isRunning}) => {

    return (
        <>
            <label id="session-label" htmlFor="session-length">Session Time</label><br/>
            <button 
            id="session-decrement" 
  disabled={isRunning} 
  onClick={() => setSessionTime(prev => Math.max(prev - 1, 1))}

            >↓</button>
            <h1 id="session-length">{sessionTime}</h1>
            <button 
            id="session-increment" 
  disabled={isRunning} 
  onClick={() => setSessionTime(prev => Math.min(prev + 1, 60))}

            >↑</button><br/>
        </>
    )
}

export default Session;