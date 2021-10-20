import React from "react";
import "./ItemListContainer.css";

const ItemListContainer = ({ children, greeting }) => {
    return (
    <div id="Botones">
        <h1>{greeting}</h1>
        {children}
    </div>
    );
};

export default ItemListContainer;