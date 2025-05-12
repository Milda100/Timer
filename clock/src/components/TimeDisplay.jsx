import { useState, useEffect } from "react";
import beepSound from '../assets/audio/beepSound.mp3'

const TimeDisplay = ({breakTime, setBreakTime, sessionTime, setSessionTime}) => {
 const [timeLeft, setTimeLeft] = useState(1500);
 const [isRunning, setIsRunning] = useState(false);
 const [onBreak, setOnBreak] = useState(false);

 const controlBeepSound = (action) => {
    const beepSound = document.getElementById("beep");
    if (!beepSound) return;

    if (action === "play") {
        beepSound.play();
    } else if (action === "stop") {
        beepSound.pause();
        beepSound.currentTime = 0;
    }
};

 useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
        setTimeLeft(prevTime => (prevTime > 0 ? prevTime -1 : prevTime));  //decreases 1s every second
    }, 1000);

    return () => clearInterval(interval);
 }, [isRunning, timeLeft]); 

 useEffect(() => {
    if (timeLeft === 0) {
        controlBeepSound("play"); //play sound

        setOnBreak(prev => {
            const newState = !prev;
            setTimeLeft(newState ? breakTime : sessionTime); // ✅ Correctly sets next timer duration
            return newState;
        });
    }
}, [timeLeft]);


 const formatTime = () => {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
 };

const handlePlayPause = () => {
    setIsRunning(prev => {
        if (!prev && timeLeft === 1500) { //Only set timeLeft when starting for the first time
            setTimeLeft(sessionTime);
        }
        return !prev; //Toggle play/pause without resetting timeLeft
    });
};

const handleReset = () => {
    setIsRunning(false); // stop the timer
    setOnBreak(false); // break state resets
    setBreakTime(300); // Reset break length to 5 minutes
    setSessionTime(1500); // Reset session length to 25 minutes
    setTimeLeft(1500); // Reset time-left to default session time

    controlBeepSound("stop");

}

 return (
    <>
        <label id="timer-label" htmlFor="time-left">
            {onBreak ? "Break Time" : "Session Time"}
        </label>
        <h1 id="time-left">{formatTime()}</h1>
        <button id="start_stop" onClick={handlePlayPause}>{isRunning ? "Pause" : "Start"}</button>
        <button id="reset" onClick={handleReset}>Reset</button>
        <audio id="beep" src={beepSound} preload="auto"></audio>
    </>
)
};

export default TimeDisplay;
