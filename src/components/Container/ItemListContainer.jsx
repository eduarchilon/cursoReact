import './ItemListContainer.css'
import ItemList from './ItemList';
import {productos} from '../../../src/components/Other/Productos';

// solo que muestre un texto en pantalla
function ItemListContainer(props) {
    const {titulo, subtitulo} = props 
    console.log(props);

    const miPromesa = new Promise((resuelto, rechazado)=>{
        resuelto(true);
    })

    miPromesa
    .then(
        setTimeout(()=>{
            productos.forEach(function(producto) {
                console.log(producto);
              });
        }, 2000)
    )
    .catch(
        (error)=>{
            console.log("Hubo un error en la promesa");
        })

    return (
        <>
        <div className="itemListContainer">
            <h1>{titulo}</h1>
            <h3>{subtitulo}</h3>
        </div>
        <ItemList items={productos}/>
        </>
    )
}


export default ItemListContainer


