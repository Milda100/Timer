import { useState } from 'react';

const Break = ({ breakTime, setBreakTime }) => {
  return (
    <>
      <label id="break-label" htmlFor="break-length">Break Time</label>
      <button id="break-decrement" onClick={() => setBreakTime(prev => Math.max(prev - 60, 60))}>
        Break ↓
      </button>
      <h1 id="break-length">{breakTime / 60} min</h1> {/* Converts seconds to minutes */}
      <button id="break-increment" onClick={() => setBreakTime(prev => Math.min(prev + 60, 900))}>
        Break ↑
      </button>
    </>
  );
};


export default Break;