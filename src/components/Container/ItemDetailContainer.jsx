import React from 'react'
// import productos from '../Other/Productos';
import ItemDetail from './ItemDetail';
import './ItemListContainer.css';
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
// import {miPromesa} from '../Container/'
import  getFirestore  from '../../Firebase/fireBase';

function ItemDetailContainer() {
    const { idProducto } = useParams();

    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState({})

    useEffect(() => {
        const db = getFirestore()
        const dbQuery = db.collection('productos').doc(idProducto)
        dbQuery.get()
        .then(data=>
            setProduct( {id: data.id, ...data.data()})  
        )
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
