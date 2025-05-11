import { useState, useEffect } from "react";

const TimeDisplay = () => {
 const [timeLeft, setTimeLeft] = useState(1500);
 const [isRunning, setIsRunning] = useState(false);

 useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
        setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
 }, [isRunning]);

 const formatTime = () => {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
 };

const handlePlayPause = () => {
    setIsRunning(prev => !prev);
};

const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(1500);
}

 return (
    <>
        <label id="timer-label" htmlFor="time-left">Timer</label>
        <h1 id="time-left">{formatTime()}</h1>
        <button id="start_stop" onClick={handlePlayPause}>{isRunning ? "Pause" : "Start"}</button>
        <button id="reset" onClick={handleReset}>Reset</button>
    </>
)
};

export default TimeDisplay;
