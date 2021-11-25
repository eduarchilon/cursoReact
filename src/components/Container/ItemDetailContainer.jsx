import React from 'react'
import productos from '../Other/Productos';
import ItemDetail from './ItemDetail';
import './ItemListContainer.css';
import {useParams} from 'react-router-dom';
import {miPromesa} from '../Other/Productos'

function ItemDetailContainer() {
    const { idProducto } = useParams();


    const getItems = () => {
        miPromesa
        .then(
            setTimeout(()=>{
                console.log(productos[idProducto]);
            }, 2000)
        )
        .catch(
            (error)=>{
                console.log("Hubo un error en la promesa");
            })
    }

    getItems();


    return (
        <div className="detail__container">
            <ItemDetail item={productos[idProducto]}/> 
        </div>
    )
}

export default ItemDetailContainer
