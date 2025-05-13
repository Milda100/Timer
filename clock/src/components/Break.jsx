import { useDispatch, useSelector } from 'react-redux';
import { setBreakTime } from '../redux/store';

const Break = () => {
  const breakTime = useSelector(state => state.timer.breakTime);
  const isRunning = useSelector(state => state.timer.isRunning);
  const dispatch = useDispatch();

  return (
    <>
      <label id="break-label" htmlFor="break-length">Break Time</label><br/>
      <button 
      id="break-decrement" 
      disabled={isRunning} 
      onClick={() => dispatch(setBreakTime(Math.max(breakTime - 1, 1)))}
      >↓</button>
      <h1 id="break-length">{breakTime}</h1>
      <button 
      id="break-increment" 
      disabled={isRunning} 
      onClick={() => dispatch(setBreakTime(Math.min(breakTime + 1, 60)))}
      >↑</button><br/>
    </>
  );
};


export default Break;