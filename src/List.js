import React from "react";

function List(props) {
    return (
        <ul>
            {props.itemsFromSetItems.map((item) => (
                <li key={item.id}>
                    {item.text}
                    <button
                        onClick={() => {
                            props.onItemDeletedList(item);
                        }}>
                        <img alt="bin" src="./assets/bin.png"></img>
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default List;
