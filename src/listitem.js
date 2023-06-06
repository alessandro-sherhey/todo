import React from "react";

function NewToDo () {
    return (
        <p>
            {document.getElementById("newReminderText").innerHTML}
        </p>
    )
}

export default NewToDo;