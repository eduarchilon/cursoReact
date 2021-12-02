import React from 'react'
import productos from '../Other/Productos';
import ItemDetail from './ItemDetail';
import './ItemListContainer.css';
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
// import {miPromesa} from '../Container/'

const getItem = new Promise((aceptado, rechazado)=>{
    setTimeout(()=>{
        aceptado(productos)
    }, 2000)
})


function ItemDetailContainer() {
    const { idProducto } = useParams();

    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState({})

    useEffect(() => {
        getItem
        .then(data=>{
            setProduct(data.find(prod => prod.id === parseInt(idProducto)))
        })
        .catch(error=>{
            console.log(error)
        })
        .finally(()=>{
            setLoading(false)
        })   
    },[idProducto])



    return (
        <>
        { loading ? 
                    <h2>Cargando productos...</h2>
                :
                <div className="detail__container">
                    <ItemDetail item={product}/> 
                </div>
        }
        </>
    )
}

export default ItemDetailContainer
