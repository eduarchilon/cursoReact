import './ItemDetailContainer.css'
import React from 'react'
import ItemCount from './ItemCount';

function ItemDetail( {item}) {

    const {title, price, pictureUrl, categoria, stock} = item;

    return (
        <div className="detail">
            <img src={pictureUrl} alt="" />
            <h2 className="detail-item">{title}</h2>
            <h4 className="detail-item">{categoria}</h4>
            <h5 className="detail-item">Stock: {stock}</h5>
            <h3 className="detail-item">{price}</h3>
           <ItemCount initial={0} stock={stock} />
        </div>
    )
}

export default ItemDetail
