import React from 'react'
import './ItemListContainer.css';

function Cart() {
    return (
        <div className="cart__info">
            <h1>El carrito esta vácio</h1>
            <h3>No hay productos cargados</h3>
            <button>Hacé tu compra</button>
        </div>
    )
}

export default Cart
