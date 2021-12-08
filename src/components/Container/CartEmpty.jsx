import React from 'react'
import './ItemListContainer.css';
import '../Container/Item.css';
import { Link } from 'react-router-dom';

function CartEmpty() {
    return (
        <div className="cart__info">
            <h1>El carrito esta vácio</h1>
            <h3>No hay productos cargados</h3>
            <Link to="/" className="cart__button">
                <button>Hacé tu compra</button>
            </Link>
            </div>
    )
}

export default CartEmpty
