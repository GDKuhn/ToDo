import React, { useState } from "react";
import "./ToDo.css";
import List from "./List";
import Form from "./Form";

function ToDo() {
    const [items, setItemsList] = useState([]);

    function onAddItemToDo(text) {
        setItemsList([...items, text]);
    }

    return (
        <div className="container">
            <h1>ToDo</h1>
            <Form onAddItemForm={onAddItemToDo}></Form>
            <List itemsFromSetItems={items}></List>
        </div>
    );
}

export default ToDo;
