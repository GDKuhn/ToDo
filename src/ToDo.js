import React, { useState } from "react";
import "./ToDo.css";

function ToDo() {
    const [textToDo, setText] = useState("");

    function handleChange(event) {
        let textInput = event.target.value;
        setText(textInput);
    }
    return (
        <div className="container">
            <h1>ToDo</h1>
            <form>
                <input onChange={handleChange} type="text"></input>
                <button>Add</button>
            </form>

            <ul>
                <li>{textToDo}</li>
            </ul>
        </div>
    );
}

export default ToDo;
