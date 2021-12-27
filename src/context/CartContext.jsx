import {createContext, useState, useContext} from 'react'

const CartContext = createContext([])

export const useCartContext =()=> useContext(CartContext)

function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([])
    const [buyerList, setBuyerList] = useState({})

    const addProduct=(item)=>{
            const index = cartList.findIndex(i => i.id === item.id)//pos    -1
  
        if (index > -1) {
          const oldQy = cartList[index].cantidad

          cartList.splice(index, 1)
          setCartList([...cartList, { ...item, cantidad: item.cantidad + oldQy}])
        } else {
          setCartList([...cartList, {...item, cantidad: item.cantidad}])
        }

    }

    const emptyCart=()=>{
        setCartList([])
    }

    const removerItem=(id)=>{
        let index = cartList.findIndex((obj => obj.id === id));
        cartList.splice(index, 1);
        setCartList([...cartList])
    }

    const isInCart=(id)=>{
        let result
            cartList.forEach(element => {
                if(parseInt(element.id)===parseInt(id)){
                    result= true
                }else{
                    result=false
                }
        });
        return result
    }

    const priceTotal =()=>{
        return cartList.reduce((acum, value)=>(acum + (value.cantidad * value.price)), 0)
    }

    const cantidadItem=()=>{
        return cartList.reduce((acum, item)=> acum = acum + item.cantidad, 0)
    }

    const addBuyer=(buyer)=>{
        return setBuyerList(buyer)
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addProduct, 
            emptyCart,
             removerItem,
             priceTotal,
             cantidadItem,
             isInCart,
             addBuyer, buyerList
             }}>
             { children } 
        </CartContext.Provider>       
    )
}


export default CartContextProvider

