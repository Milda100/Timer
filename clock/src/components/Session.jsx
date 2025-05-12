

const Session = ({sessionTime, setSessionTime}) => {

    return (
        <>
            <label id="session-label" htmlFor="session-length">Session Time</label><br/>
            <button id="session-decrement" onClick={() => setSessionTime(prev => Math.max(prev - 60, 60))}>↓</button>
            <h1 id="session-length">{sessionTime / 60} min</h1>
            <button id="session-increment" onClick={() => setSessionTime(prev => Math.max(prev + 60, 3600))}>↑</button><br/>
        </>
    )
}

export default Session;