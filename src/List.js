import React from "react";

function List(props) {
    return (
        <ul>
            {props.itemsFromSetItems.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    );
}

export default List;
