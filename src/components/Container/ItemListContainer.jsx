import './ItemListContainer.css'
import ItemList from './ItemList';
import {productos} from '../Other/Productos';
import {useState, useEffect} from 'react'



const miPromesa = new Promise((resuelto, rechazado)=>{
    setTimeout(()=>{
        resuelto(productos)
    }, 2000)
})

// solo que muestre un texto en pantalla
function ItemListContainer(props) {

    const {titulo, subtitulo} = props;

    const [products, setproducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        miPromesa
        .then(datos=>{
            console.log(datos)
            setproducts(datos)
        })
        .catch(error =>{
            console.log(error)
        })
        .finally(()=>{
            console.log('Dr. ¡reacccion de fusión exitosa!')
            setLoading(false)
        })
    },[])
    


    return (
        <>
        <div className="itemListContainer">
            <h1>{titulo}</h1>
            <h3>{subtitulo}</h3>
        </div>
        {loading ?
                <h2>Cargando productos...</h2>
            : 
            <ItemList items={products}/>
             }
        </>
    )
}


export default ItemListContainer


