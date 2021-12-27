import React, { useState } from 'react'

function ItemCount({initial, stock, onAdd}) {
    const [count, setCount] = useState(initial)

    function Sum(){
        if(count<stock){
            setCount(count + 1)
        }
    }
    
    function Rest(){
        setCount(count - 1)
        if(count===0){
            setCount(count)
        }
    }
    
    // console.log(count)

    return (
        <>
          <div className="btn-detail-container">
              <div className="btn-detail-item">
                <button onClick={Sum} className="sumar">+</button>
                <p>{count}</p>
                <button onClick={Rest} className="restar">-</button>
              </div>
              <div className="agregar-carrito">
                <button onClick={()=>onAdd(count)}>Agregar al carrito</button>
              </div>
            </div>  
        </>
    )
}

export default ItemCount
