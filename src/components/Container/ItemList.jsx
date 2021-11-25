import Item from './Item';
import './ItemList.css';
import {useParams} from 'react-router-dom';
// import miPormesa from '../Other/Productos'


function ItemList({items}) {

    const { idCategoria } = useParams(); 

    // console.log(idCategoria);

    let filtrado;

    if(idCategoria){
        filtrado = items.filter(prods=>prods.categoria===idCategoria)
    }else{
        filtrado = items;
    }


    return (
        <div className="productos__container">
            {filtrado.map(prods => <div key={prods.id}><Item item={prods}/></div>)}
        </div>
    )
}


export default ItemList

