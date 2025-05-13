import { useDispatch, useSelector } from 'react-redux';
import { setSessionTime } from '../redux/store';

const Session = () => {
    const sessionTime = useSelector(state => state.timer.sessionTime);
    const isRunning = useSelector(state => state.timer.isRunning);
    const dispatch = useDispatch();

    return (
        <>
            <label id="session-label" htmlFor="session-length">Session Time</label><br/>
            <button 
            id="session-decrement" 
            disabled={isRunning} 
            onClick={() => dispatch(setSessionTime(Math.max(sessionTime - 1, 1)))}
            >↓</button>
            <h1 id="session-length">{sessionTime}</h1>
            <button 
            id="session-increment" 
            disabled={isRunning} 
            onClick={() => dispatch(setSessionTime(Math.min(sessionTime + 1, 60)))}
            >↑</button><br/>
        </>
    )
}

export default Session;