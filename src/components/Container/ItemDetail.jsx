import './ItemDetailContainer.css'
import React from 'react'
import ItemCount from './ItemCount';
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'; 

function ItemDetail( {item}) {
    
    const [count, setCount] = useState(0)

    const {addProduct, removerItem, isInCart} = useCartContext()
    

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
                addProduct ({...item, cantidad: cant})
                setCount(cant)
            }else{
                cant = cant+count
                removerItem(item.id)
                addProduct ({...item, cantidad:cant})
                setCount(cant)

            }
    }

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
        </div>
    )
}

export default ItemDetail
