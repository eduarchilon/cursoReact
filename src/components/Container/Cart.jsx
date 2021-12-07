import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext';
import './ItemListContainer.css';
import Item from '../Container/Item.css';
// import {useContext} from 'react'
// import { CartContext } from '../../context/CartContext';



function Cart() {

    const {cartList, vaciarCarrito} = useCartContext()

    // const [count, setCount] = useState(0)

    let cant = 0;
    let prec = 0.0;
    cartList.forEach (function(prod){
        cant += prod.cantidad;
        prec+= prod.price;
    });





    console.log(cartList)

    // const {cartList, vaciarCarrito} =useContext(CartContext)

    return (
        <div>
            {/* {cartList.map(prod=> <li key={prod.id}>{prod.title} {prod.cantidad}</li>)} */}
           <table className="table">
        <tbody>
            <tr className="table-primary t-titulos">
                <td className="table-primary"><h4>Descripcion</h4></td>
                <td className="table-primary"><h4>Cantidad</h4></td>
                <td className="table-primary"><h4>Precio</h4></td>
                <td className="table-primary"></td>
            </tr>
            {cartList.map(prod=> 
            <tr className="table-primary t-item">
                <td className="table-primary"><p>{prod.title}</p></td>
                <td className="table-primary"><p>{prod.cantidad}</p></td>
                <td className="table-primary"><p>$ {prod.price}</p></td>
                <td className="table-primary"><button>Borrar</button></td>
            </tr>
            )}
            <tr className="table-primary t-item">
                <td className="table-primary"><button onClick={()=>vaciarCarrito()}>vaciar carrito</button></td>
                <td className="table-primary"><h4>{cant}</h4></td>
                <td className="table-primary"><h4>$ {prec}</h4></td>
                <td className="table-primary"></td>
            </tr>
        </tbody>
    </table>
            {/* <button onClick={()=>vaciarCarrito()}>vaciar carrito</button> */}
        </div>
        // <div className="cart__info">
        //     <h1>El carrito esta vácio</h1>
        //     <h3>No hay productos cargados</h3>
        //     <button>Hacé tu compra</button>
        // </div>
    )
}

export default Cart
