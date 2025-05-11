import { useState } from "react";

const Session = ({sessionTime}) => {
    

    return (
        <>
            <label id="session-label" htmlFor="session-length">Session Time</label>
            <button id="session-decrement">Session ↓</button>
            <div id="session-length">{}</div>
            <button in="session-increment">Session ↑</button>
        </>
    )
}

export default Session;