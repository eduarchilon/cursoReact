import React, { useState } from 'react'

function ItemCount({initial, stock, onAdd}) {
    const [count, setCount] = useState(initial)

    function Sumar(){
        if(count<stock){
            setCount(count + 1)
        }
    }
    
    function Restar(){
        setCount(count - 1)
        if(count===0){
            setCount(count)
        }
    }
    
    function Agregar(){
        onAdd(count)
    }

    return (
        <>
          <div className="btn-detail-container">
              <div className="btn-detail-item">
                <button onClick={Sumar} className="sumar">+</button>
                <p>{count}</p>
                <button onClick={Restar} className="restar">-</button>
              </div>
              <div className="agregar-carrito">
                <button onClick={Agregar}>Agregar al carrito</button>
              </div>
            </div>  
        </>
    )
}

export default ItemCount
