import React, { useState , useEffect} from 'react'
import { useCartContext } from '../../context/CartContext';
import './ItemListContainer.css';
import '../Container/Item.css';
import CartEmpty from './CartEmpty';
// import {useContext} from 'react'
// import { CartContext } from '../../context/CartContext';


function Cart() {

    const {cartList, vaciarCarrito, removerItem} = useCartContext()

    const [count, setCount] = useState(0)
    const [load, setLoad] = useState(true)
    const[precio, setPrecio] = useState(0)

    let cant = 0;
    let prec = 0.0;

    useEffect(()=>{
        if(load){
            cartList.forEach (function(prod){
                cant += prod.cantidad
                prec+= prod.price
                setCount(cant)
                setPrecio(prec)
                setLoad(false)
            })
    }else if(!load){
        setLoad(true)
        setCount(count)
        setPrecio(precio)
    }
    },[])



    // console.log("esto es " + count)
    // console.log("estos es " +precio)

    // console.log(cartList)

    // const {cartList, vaciarCarrito} =useContext(CartContext)

    return (
        <div>
            {/* {cartList.map(prod=> <li key={prod.id}>{prod.title} {prod.cantidad}</li>)} */}
          
            {/* <button onClick={()=>vaciarCarrito()}>vaciar carrito</button> */}
    
            {load  ?
            
            <CartEmpty />

            :

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
                    <td className="table-primary"><button onClick={removerItem}>Borrar</button></td>
                </tr>
                )}
                <tr className="table-primary t-item">
                    <td className="table-primary"><button onClick={vaciarCarrito}>vaciar carrito</button></td>
                    <td className="table-primary"><h4>{count}</h4></td>
                    <td className="table-primary"><h4>$ {precio}</h4></td>
                    <td className="table-primary"></td>
                </tr>
            </tbody>
        </table>
            }

            </div>
    
        )
}

export default Cart
