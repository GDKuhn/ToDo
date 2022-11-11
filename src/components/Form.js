import React, { useState } from "react";
import { addItem } from "../actions/listActions";
import { useDispatch } from "react-redux";

function Form(props) {
	const [text, setText] = useState("");
	const dispatch = useDispatch(props.dispatch);

	function addItemEvent(event) {
		event.preventDefault();
		if (text) {
			dispatch(addItem(text));
			setText("");
		}
	}

	function handleChange(event) {
		let textFromInput = event.target.value;
		setText(textFromInput);
	}

	return (
		<form className="input">
			<input onChange={handleChange} type="text" value={text}></input>
			<button onClick={addItemEvent}>Add</button>
		</form>
	);
}

export default Form;
