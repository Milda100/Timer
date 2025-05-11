import { useState, useEffect } from "react";

const TimeDisplay = ({sessionTime}) => {
 const [timeLeft, setTimeLeft] = useState(sessionTime);
 const [isRunning, setIsRunning] = useState(false);
 const [onBreak, setOnBreak] = useState(false);
 const [breakTime, setBreakTime] = useState(300);


 useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
        setTimeLeft(prevTime => {
            if (prevTime > 1) {
                return prevTime -1;
            }
            setIsRunning(false);  // Stop timer when it reaches 0
            setOnBreak(prev => !prev); // Switch between work/break
            return onBreak ? sessionTime : breakTime; // Reset to the next timer
        });
    }, 1000);
    return () => clearInterval(interval);
 }, [isRunning, onBreak]); 

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
    setOnBreak(false);
    setTimeLeft(sessionTime);
    setBreakTime(breakTime);
}

 return (
    <>
        <label id="timer-label" htmlFor="time-left">Timer</label>
        <h1 id="time-left">{onBreak ? "Break Time" : "Session Time"}: {formatTime()}</h1>
        <button id="start_stop" onClick={handlePlayPause}>{isRunning ? "Pause" : "Start"}</button>
        <button id="reset" onClick={handleReset}>Reset</button>
    </>
)
};

export default TimeDisplay;
