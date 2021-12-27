import React, { useState , useEffect} from 'react'
import { useCartContext } from '../../context/CartContext';
import './ItemListContainer.css';
import '../Container/Item.css';
import CartEmpty from './CartEmpty';
import Formulario from './Formulario';
import { Link } from 'react-router-dom';


function Cart() {

    const {cartList, emptyCart, removerItem, priceTotal} = useCartContext()


    const [count, setCount] = useState(0)
    const [load, setLoad] = useState(true)
    const[precio, setPrecio] = useState(0)




    useEffect(()=>{
        let cant = 0;
        if(load){
            // aca sumo todo para el final del carrito
            cartList.map(prod => {
               cant+=prod.cantidad
                setCount(cant)
                setPrecio(priceTotal)
                return setLoad(false)
            })
    }if(cartList.length<=0){
        setLoad(true)
    }
    },[load, cartList, priceTotal])



    return (
        <div>
    
            {load  ?
            
            <CartEmpty />

            :

            <div>
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
                    <td className="table-primary"><p>$ {prod.cantidad * prod.price}</p></td>
                    <td className="table-primary"><button onClick={removerItem}>Borrar</button></td>
                </tr>
                )}
                <tr className="table-primary t-item">
                    <td className="table-primary">
                        <h4>Total</h4>
                    </td>
                    <td className="table-primary">{count}</td>
                    <td className="table-primary"><h4>$ {precio}</h4></td>
                    <td className="table-primary">
                    <Link to="/cartEmpty">
                    <button  onClick={emptyCart}  className="empty">vaciar carrito</button>
                    </Link>
                    </td>
                </tr>
            </tbody>
        </table>
        <Formulario />
        </div>
            }
            </div>
    
        )
}

export default Cart
