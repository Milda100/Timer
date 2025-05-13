import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsRunning, resetTimer, setTimeLeft, toggleBreak } from "../redux/store";
import beepSound from '../assets/audio/beepSound.mp3';

const TimeDisplay = () => {
    const dispatch = useDispatch();
    const sessionTime = useSelector(state => state.timer.sessionTime);
    const breakTime = useSelector(state => state.timer.breakTime);
    const isRunning = useSelector(state => state.timer.isRunning);
    const timeLeft = useSelector(state => state.timer.timeLeft);
    const onBreak = useSelector(state => state.timer.onBreak);

    const controlBeepSound = (action) => {
        const beepSound = document.getElementById("beep");
        if (!beepSound) return;

        action === "play" ? beepSound.play() : beepSound.pause();
        beepSound.currentTime = 0;
    };

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            if (timeLeft > 0) {
                dispatch(setTimeLeft(timeLeft - 1)); // Dispatch Redux action
            } else {
                controlBeepSound("play"); // Play beep sound when time runs out
                dispatch(toggleBreak()); // Switch between break and session
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning, timeLeft, dispatch]);

    const formatTime = () => {
        const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
        const seconds = String(timeLeft % 60).padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <>
            <label id="timer-label">{onBreak ? "Break Time" : "Session Time"}</label>
            <h1 id="time-left">{formatTime()}</h1>
            <button id="start_stop" onClick={() => dispatch(setIsRunning(!isRunning))}>
                {isRunning ? "Pause" : "Start"}
            </button>
            <button id="reset" onClick={() => {
                dispatch(resetTimer());
                controlBeepSound("stop");
            }}>
                Reset
            </button>
            <audio id="beep" src={beepSound} preload="auto"></audio>
        </>
    );
};

export default TimeDisplay;