import React from "react";



export default function DisableButton({setSession, setIsTimerRunning, session}) {
    const handleStop = (e) => {
        if (session !== null) {
          setSession(null)
          setIsTimerRunning(false)
        }
      }
    
    return (
        <button
            type="button"
            className="btn btn-secondary"
            data-testid="stop"
            title="Stop the session"
            // This will run the handleStop on click
            onClick={handleStop}
            // This just checks if there is a session going on, and if not sets disabled to true
            disabled={!(session!==null)}
            >
            <span className="oi oi-media-stop" />
        </button>
    )
}