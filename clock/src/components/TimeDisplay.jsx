import { useState, useEffect } from "react";
import beepSound from '../assets/audio/beepSound.mp3'

const TimeDisplay = ({breakTime, setBreakTime, sessionTime, setSessionTime, isRunning, setIsRunning}) => {
 const [timeLeft, setTimeLeft] = useState(sessionTime * 60);
 const [onBreak, setOnBreak] = useState(false);

 console.log("Initial sessionTime:", sessionTime);
console.log("Initial timeLeft:", timeLeft);

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
    setTimeLeft(sessionTime * 60); // sessionTime matches timeLeft
}, [sessionTime]);

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
            setTimeLeft(newState ? breakTime * 60 : sessionTime * 60); // Correctly sets next timer duration
            return newState;
        });
    }
    console.log("Displayed time-left:", document.getElementById("time-left")?.innerText);

}, [timeLeft]);


 const formatTime = () => {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
 };

 console.log("formatTime:", formatTime());

const handlePlayPause = () => {
    setIsRunning(prev => {
        if (!prev && timeLeft === (25 * 60)) { //Only set timeLeft when starting for the first time
            setTimeLeft(sessionTime * 60);
        }
        return !prev; //Toggle play/pause without resetting timeLeft
    });
};

const handleReset = () => {
    setIsRunning(false); // stop the timer
    setOnBreak(false); // break state resets
    setBreakTime(5); // Reset break length to 5 minutes
    setSessionTime(25); // Reset session length to 25 minutes
    setTimeLeft(25 * 60); // Reset time-left to default session time

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
