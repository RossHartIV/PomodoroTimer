import React from "react";

export default function ProgressBar({session, focusDuration, breakDuration}) {
    return (
    <div
        className="progress-bar"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        // I set a conditional check first to see if a session is running and if so another conditional to find which one
        // The math is straightforward, but I had to convert a bit from what timeRemaining was returning
        aria-valuenow={session===null ? 0:session.label==='Focusing'? Math.floor(100-(session?.timeRemaining)*100/(focusDuration*60)):Math.floor(100-(session?.timeRemaining)*100/(breakDuration*60))} // TODO: Increase aria-valuenow as elapsed time increases
        // This is almost identical to the above line only in template literals
        style={{ width: `${session===null ? 0:session.label==='Focusing'? Math.floor(100-(session?.timeRemaining)*100/(focusDuration*60)):Math.floor(100-(session?.timeRemaining)*100/(breakDuration*60))}%` }} // TODO: Increase width % as elapsed time increases
    />)
}