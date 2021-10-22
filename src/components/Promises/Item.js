import React from "react";

const Productos = ({ id, name, description, stock }) => {


    return (
        <div>
            <h1>Producto</h1>

            <p>
                <strong>ID</strong> {id}
            </p>
            <p>
                <strong>Name</strong> {name}
            </p>
            <p>
                <strong>Description</strong> {description}
            </p>
            <p>
                <strong>Stock</strong> {stock}
            </p>
        </div>

    );
};

export default Productos;