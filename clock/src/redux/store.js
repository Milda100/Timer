import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    sessionTime: 25,
    breakTime: 5,
    timeLeft: 25 * 60,
    isRunning: false,
    onBreak: false,
};

const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        setTimeLeft: (state, action) => { state.timeLeft = action.payload; },
        toggleBreak: (state) => { 
            const nextBreakState = !state.onBreak;
            state.onBreak = nextBreakState;
            state.timeLeft = nextBreakState ? state.breakTime * 60 : state.sessionTime * 60;
        },
        setSessionTime: (state, action) => { 
            state.sessionTime = action.payload;
            if (!state.onBreak) state.timeLeft = action.payload * 60;
        },
        setBreakTime: (state, action) => { 
            state.breakTime = action.payload;
            if (state.onBreak) state.timeLeft = action.payload * 60;
        },
        setIsRunning: (state, action) => { state.isRunning = action.payload; },
        resetTimer: (state) => {
            state.sessionTime = 25;
            state.breakTime = 5;
            state.timeLeft = state.sessionTime * 60; // Dynamically reset timeLeft
            state.onBreak = false;
            state.isRunning = false;
        }
    }
});

export const { setTimeLeft, toggleBreak, setSessionTime, setBreakTime, setIsRunning, resetTimer } = timerSlice.actions;

export const store = configureStore({
    reducer: {
        timer: timerSlice.reducer
    }
});