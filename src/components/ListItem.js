import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem, changeDone } from "../actions/listActions";

import Card from "./Card";

function DoneImg(props) {
	if (props.done) {
		return <img className="img" alt="done" src="./assets/checkmark_done.png"></img>;
	} else {
		return <img className="img" alt="undone" src="./assets/checkmark_undone.png"></img>;
	}
}

function ListItem(props) {
	const dispatch = useDispatch;

	return (
		<li>
			<Card className={props.item.done ? "done item" : "item"}>
				{props.item.text}
				<div>
					<button
						onClick={() => {
							dispatch(changeDone(props.item.id));
						}}>
						<DoneImg done={props.item.done}></DoneImg>
					</button>

					<button
						onClick={() => {
							dispatch(deleteItem(props.item.id));
						}}>
						<img className="img" alt="bin" src="./assets/bin.png"></img>
					</button>
				</div>
			</Card>
		</li>
	);
}

export default ListItem;
