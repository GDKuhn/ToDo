import React from "react";
import Card from "./Card";

function DoneImg(props) {
	if (props.done) {
		return (
			<img className="img" alt="done" src="./assets/checkmark_done.png"></img>
		);
	} else {
		return (
			<img
				className="img"
				alt="undone"
				src="./assets/checkmark_undone.png"></img>
		);
	}
}

function ListItem(props) {
	return (
		<li>
			<Card className={props.item.done ? "done item" : "item"}>
				{props.item.text}
				<div>
					<button
						onClick={() => {
							props.onDone(props.item);
						}}>
						<DoneImg done={props.item.done}></DoneImg>
					</button>

					<button
						onClick={() => {
							props.onItemDeleted(props.item);
						}}>
						<img className="img" alt="bin" src="./assets/bin.png"></img>
					</button>
				</div>
			</Card>
		</li>
	);
}

export default ListItem;
