import { useState, useEffect } from "react";

const TimeDisplay = ({breakTime, setBreakTime, sessionTime, setSessionTime}) => {
 const [timeLeft, setTimeLeft] = useState(1500);
 const [isRunning, setIsRunning] = useState(false);
 const [onBreak, setOnBreak] = useState(false);

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
 }, [isRunning, onBreak, sessionTime, breakTime]); 

 const formatTime = () => {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
 };

const handlePlayPause = () => {
    setIsRunning(prev => !prev);
};

const handleReset = () => {
    setIsRunning(false); // stop the timer
    setOnBreak(false); // break state resets
    setBreakTime(300); // Reset break length to 5 minutes
    setSessionTime(1500); // Reset session length to 25 minutes
    setTimeLeft(1500); // Reset time-left to default session time

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
