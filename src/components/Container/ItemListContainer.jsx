import './ItemListContainer.css'
import ItemList from './ItemList';
import {productos} from '../Other/Productos';
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';



const miPromesa = new Promise((resuelto, rechazado)=>{
    setTimeout(()=>{
        resuelto(productos)
    }, 2000)
})

// solo que muestre un texto en pantalla
function ItemListContainer(props) {

    const {titulo, subtitulo} = props;

    const { idCategoria } = useParams(); 

    const [products, setproducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        if(idCategoria){
            miPromesa
            .then(data=>{
                setproducts(data.filter(datos =>datos.categoria ===idCategoria))
            })
            .catch(error => console.log(error))
            .finally(()=>
            setLoading(false))
        }else if (!idCategoria){
            miPromesa
            .then(data=>{
                setproducts(data)
                console.log(data)
            })
            .catch(error=> console.log(error))
            .finally(()=>setLoading(false))
        }
    },[idCategoria])
    


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


