import './ItemListContainer.css'
import ItemList from './ItemList';
import {productos} from '../../../src/components/Other/Productos';



// solo que muestre un texto en pantalla
function ItemListContainer(props) {

    


    const {titulo, subtitulo} = props 
    // console.log(props);

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


