import React from 'react'
import { useCartContext } from '../../context/CartContext';
import './ItemListContainer.css';
// import {useContext} from 'react'
// import { CartContext } from '../../context/CartContext';



function Cart() {

    const {cartList, vaciarCarrito} = useCartContext()

    // const {cartList, vaciarCarrito} =useContext(CartContext)

    return (

        <div>
            {cartList.map(prod=> <li key={prod.id}>{prod.title} {prod.cantidad}</li>)}
            <button onClick={()=>vaciarCarrito()}>vaciar carrito</button>
        </div>
        // <div className="cart__info">
        //     <h1>El carrito esta vácio</h1>
        //     <h3>No hay productos cargados</h3>
        //     <button>Hacé tu compra</button>
        // </div>
    )
}

export default Cart
