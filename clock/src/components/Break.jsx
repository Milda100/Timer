

const Break = ({breakTime, setBreakTime}) => {

  return (
    <>
      <label id="break-label" htmlFor="break-length">Break Time</label><br/>
      <button id="break-decrement" onClick={() => setBreakTime(prev => Math.max(prev - 1, 1))}>↓</button>
      <h1 id="break-length">{breakTime}</h1>
      <button id="break-increment" onClick={() => setBreakTime(prev => Math.min(prev + 1, 60))}>↑</button><br/>
    </>
  );
};


export default Break;