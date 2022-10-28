import React, { useState } from "react";
import "./ToDo.css";
import List from "./components/List";
import Form from "./components/Form";
import Item from "./components/Item";

function ToDo() {
	const [items, setItemsList] = useState([]);

	function onAddItem(text) {
		let item = new Item(text);

		setItemsList([...items, item]);
	}

	function onItemDeleted(item) {
		let filteredItems = items.filter(
			(itemFromItems) => item.id !== itemFromItems.id
		);
		setItemsList(filteredItems);
	}

	function onDone(item) {
		console.log("done");
		let updatedItems = items.map((itemFromItems) => {
			if (item.id === itemFromItems.id) {
				item.done = !item.done;
			}
			return itemFromItems;
		});
		setItemsList(updatedItems);
	}
	return (
		<div className="container">
			<h1>ToDo</h1>
			<Form onAddItem={onAddItem}></Form>
			<List
				onDone={onDone}
				onItemDeleted={onItemDeleted}
				itemsFromSetItems={items}></List>
		</div>
	);
}

export default ToDo;
