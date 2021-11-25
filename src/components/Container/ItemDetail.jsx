import './ItemDetailContainer.css'
import React from 'react'

function ItemDetail( {item}) {

    const {title, price, pictureUrl, categoria} = item;

    return (
        <div className="detail">
            <img src={pictureUrl} alt="" />
            <h2 className="detail-item">{title}</h2>
            <h4 className="detail-item">{categoria}</h4>
            <h5 className="detail-item">Stock: xx</h5>
            <h3 className="detail-item">{price}</h3>
            <div className="detail__agregados">
                <button>-</button>
                <p>cant.</p>
                <button>+</button>
            </div>
            <button className="detail-item detail-item-btn">Agregar al carrito</button>
        </div>
    )
}

export default ItemDetail
