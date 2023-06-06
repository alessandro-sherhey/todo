import React from "react";

function MainUI () {
    return (
        <div>
            <header>
                <h1>To-Do</h1>
            </header>
            <input type="text" placeholder="Your Reminder" id="newReminderText">

            </input>
            <button id="newReminderButton">
                New Reminder
            </button>
        </div>
    )
}

export default MainUI;