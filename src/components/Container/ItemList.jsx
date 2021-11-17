import Item from './Item';
import './ItemList.css';




function ItemList({items}) {


    return (
        <div className="productos__container">
            {items.map(prods => <div key={prods.id}><Item item={prods}/></div>)}
        </div>
    )
}


export default ItemList

