import React, { useState } from "react";
import "./ToDo.css";
import List from "./List";
import Form from "./Form";
import Item from "./Item";

function ToDo() {
    const [items, setItemsList] = useState([]);

    function onAddItemToDo(text) {
        let item = new Item(text);

        setItemsList([...items, item]);
    }

    function onItemDeletedToDo(item) {
        let filteredItems = items.filter(
            (itemFromItems) => item.id !== itemFromItems.id
        );
        setItemsList(filteredItems);
    }

    return (
        <div className="container">
            <h1>ToDo</h1>
            <Form onAddItemForm={onAddItemToDo}></Form>
            <List
                onItemDeletedList={onItemDeletedToDo}
                itemsFromSetItems={items}></List>
        </div>
    );
}

export default ToDo;
