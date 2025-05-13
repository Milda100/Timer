

const Break = ({breakTime, setBreakTime, isRunning}) => {

  return (
    <>
      <label id="break-label" htmlFor="break-length">Break Time</label><br/>
      <button 
      id="break-decrement" 
  disabled={isRunning} 
  onClick={() => setBreakTime(prev => Math.max(prev - 1, 1))}

      >↓</button>
      <h1 id="break-length">{breakTime}</h1>
      <button 
      id="break-increment" 
  disabled={isRunning} 
  onClick={() => setBreakTime(prev => Math.min(prev + 1, 60))}

      >↑</button><br/>
    </>
  );
};


export default Break;