import './ItemDetailContainer.css'
import React from 'react'
import ItemCount from './ItemCount';
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
// import { CartContext } from '../../context/CartContext';
// import productos from '../Other/Productos';

function ItemDetail( {item}) {
    
    const [count, setCount] = useState(0)

    const {cartList, agregarProducto, removerItem, isInCart} = useCartContext()


    const [terminar, setTerminar] = useState(false)



    useEffect(() => {
        if(count){
            setTerminar(true)
        }else{
            setTerminar(false)
        }
    },[count])


    function addItem (cant) {
            if(!isInCart(item.id)){
                agregarProducto ({...item, cantidad: cant})
                setCount(cant)
                // console.log(count)
            }else{
                cant = cant+count
                // console.log(cant)
                // console.log(count)
                removerItem(item.id)
                agregarProducto ({...item, cantidad:cant})
                setCount(cant)
                // console.log(count)
            }
    }
    console.log(cartList)

    const {title, price, pictureUrl, categoria, stock} = item;

    return (
        
        <div className="detail">
            <img src={pictureUrl} alt="" />
            <h2 className="detail-item">{title}</h2>
            <h4 className="detail-item">{categoria}</h4>
            <h5 className="detail-item">Stock: {stock}</h5>
            <h3 className="detail-item">{price}</h3>
            {terminar ?

            <div className="agregar-carrito-2">

                <Link to="/cart">
                <button>Terminar Compra</button>
                </Link>
            </div>
            :   
            <ItemCount initial={0} stock={stock} onAdd={addItem} />
            
        }
        {/* <ItemCount initial={0} stock={stock} onAdd={addItem} /> */}
        </div>
    )
}

export default ItemDetail
