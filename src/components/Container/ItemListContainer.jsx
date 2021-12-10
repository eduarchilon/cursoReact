import './ItemListContainer.css'
import ItemList from './ItemList';
// import {productos} from '../Other/Productos';
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import  getFirestore  from '../../Firebase/fireBase';



// const miPromesa = new Promise((resuelto, rechazado)=>{
//     setTimeout(()=>{
//         resuelto(productos)
//     }, 2000)
// })

// solo que muestre un texto en pantalla
function ItemListContainer(props) {

    const {titulo, subtitulo} = props;

    const { idCategoria } = useParams(); 

    const [products, setproducts] = useState([])
    const [loading, setLoading] = useState(true)



    useEffect(()=>{
        if(idCategoria){
            const db = getFirestore()
            const dbQuery = db.collection('productos').where('categoria', '==', idCategoria)
            dbQuery.get()
            .then(data=>
                setproducts( data.docs.map(item=>( {id: item.id, ...item.data()} )) )    
            )
            .catch(error => console.log(error))
            .finally(()=>
            setLoading(false))
        }else if (!idCategoria){
            const db = getFirestore()
            const dbQuery = db.collection('productos')
            dbQuery.get()
            .then(data=>
                setproducts( data.docs.map(item=>( {id: item.id, ...item.data()} )) )    
            )
            .catch(error=> console.log(error))
            .finally(()=>setLoading(false))
        }
    },[idCategoria])

    console.log(products)

    


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
              {/* <ItemList items={productos}/> */}
        </>
    )
}


export default ItemListContainer


