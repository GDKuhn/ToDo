import React, { useState } from "react";

function Form(props) {
    const [text, setText] = useState("");

    function addItem(event) {
        event.preventDefault();
        if (text) {
            // setItemsList([...itemsOnToDo, text]);
            props.onAddItemForm(text);
            setText("");
        }
    }

    function handleChange(event) {
        let textFromInput = event.target.value;
        setText(textFromInput);
    }

    return (
        <form>
            <input
                onChange={handleChange}
                type="text"
                value={text}></input>
            <button onClick={addItem}>Add</button>
        </form>
    );
}

export default Form;
