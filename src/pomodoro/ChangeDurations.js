import React from "react";
import {minutesToDuration} from "../utils/duration"

export default function ChangeDurations({ focusDuration, breakDuration, session, setFocusDuration, setBreakDuration }) {
    // This will handle the increment/decrement buttons for both the focuses and breaks
    
    const handleDuration = (e) => {
        // make sure no session is running
        if (session === null){
            // I decided to use a switch case, because apparently they're quite fast
            switch (e.target.parentNode.getAttribute('data-testid')) {
                case "decrease-focus":
                focusDuration>5? setFocusDuration(focusDuration-5):setFocusDuration(focusDuration)
                break;
                case "increase-focus":
                focusDuration<60? setFocusDuration(focusDuration+5):setFocusDuration(focusDuration)
                break;
                case "decrease-break":
                breakDuration>1 ? setBreakDuration(breakDuration-1):setBreakDuration(breakDuration)
                break;
                case "increase-break":
                breakDuration<15 ? setBreakDuration(breakDuration+1):setBreakDuration(breakDuration)
                break;
                default: 
                break;
            }
            // There was a funny glitch where sometimes pressing a button would return itself
            // as a target and sometimes as a parent to the target, so I made a switch for each.
            switch (e.target.getAttribute('data-testid')) {
                case "decrease-focus":
                focusDuration>5? setFocusDuration(focusDuration-5):setFocusDuration(focusDuration)
                break;
                case "increase-focus":
                focusDuration<60? setFocusDuration(focusDuration+5):setFocusDuration(focusDuration)
                break;
                case "decrease-break":
                breakDuration>1 ? setBreakDuration(breakDuration-1):setBreakDuration(breakDuration)
                break;
                case "increase-break":
                breakDuration<15 ? setBreakDuration(breakDuration+1):setBreakDuration(breakDuration)
                break;
                default: 
                break;
            }
        }
    }
    
    return (
        <div className="row">
            <div className="col">
            <div className="input-group input-group-lg mb-2">
                <span className="input-group-text" data-testid="duration-focus">
                {/* TODO: Update this text to display the current focus session duration */}
                {/* This is as simple as calling the given component */}
                Focus Duration: {minutesToDuration(focusDuration)}
                </span>
                <div className="input-group-append">
                {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-testid="decrease-focus"
                    // For each button I use the handleDuration Component
                    onClick={handleDuration}
                >
                    <span className="oi oi-minus" />
                </button>
                {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-testid="increase-focus"
                    onClick={handleDuration}
                >
                    <span className="oi oi-plus" />
                </button>
                </div>
            </div>
            </div>
            <div className="col">
            <div className="float-right">
                <div className="input-group input-group-lg mb-2">
                <span className="input-group-text" data-testid="duration-break">
                    {/* TODO: Update this text to display the current break session duration */}
                    Break Duration: {minutesToDuration(breakDuration)}
                </span>
                <div className="input-group-append">
                    {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                    <button
                    type="button"
                    className="btn btn-secondary"
                    data-testid="decrease-break"
                    onClick={handleDuration}
                    >
                    <span className="oi oi-minus" />
                    </button>
                    {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                    <button
                    type="button"
                    className="btn btn-secondary"
                    data-testid="increase-break"
                    onClick={handleDuration}
                    >
                    <span className="oi oi-plus" />
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}