

const Break = ({breakTime, setBreakTime}) => {

  return (
    <>
      <label id="break-label" htmlFor="break-length">Break Time</label><br/>
      <button id="break-decrement" onClick={() => setBreakTime(prev => Math.max(prev - 60, 60))}>↓</button>
      <h1 id="break-length">{breakTime / 60} min</h1>
      <button id="break-increment" onClick={() => setBreakTime(prev => Math.min(prev + 60, 3600))}>↑</button><br/>
    </>
  );
};


export default Break;