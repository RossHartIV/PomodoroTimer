import React from "react";
import {minutesToDuration, secondsToDuration} from "../../utils/duration"

export default function ShowSubtitle({session, focusDuration, breakDuration}) {
    // To solve this, I just wrapped the whole thing in an conditional checking
    // wheter there is a session running
    if (session!==null) {
        return (<div className="row mb-2">
        <div className="col">
        {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
        <h2 data-testid="session-title">
            {/* Just a conditional that checks which session we're in */}
            {session?.label} for {session?.label === 'Focusing' ? minutesToDuration(focusDuration):minutesToDuration(breakDuration)} minutes
        </h2>
        {/* TODO: Update message below correctly format the time remaining in the current session */}
        <p className="lead" data-testid="session-sub-title">
            {/* Again, just calling the given component */}
            {secondsToDuration(session?.timeRemaining)} remaining
        </p>
        </div>
    </div>)
    }
    else {
        return <div></div>
    } 
}