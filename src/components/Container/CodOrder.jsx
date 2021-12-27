import React from 'react'
import '../Container/Item.css';

function CodOrder({order}) {
    return (
        <div className='order'>
            <h1>Su Numero de orden es:</h1>
            <h4>{order}</h4>
        </div>
    )
}

export default CodOrder
