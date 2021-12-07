import {createContext, useState, useContext} from 'react'

const CartContext = createContext([])

export const useCartContext =()=> useContext(CartContext)

function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([])

    const agregarProducto=(item)=>{
            setCartList([...cartList, item])
    }

    const vaciarCarrito=()=>{
        setCartList([])
    }

    const removerItem=(id)=>{
        let index = cartList.findIndex((obj => obj.id === id));
        cartList.splice(index, 1);
        setCartList([...cartList])
    }

    const isInCart=(id)=>{
        let resultado
            cartList.forEach(element => {
                if(parseInt(element.id)===parseInt(id)){
                    resultado= true
                }else{
                    resultado=false
                }
        });
        return resultado
    }

    // const isInCart=(itemId)=>{
    //     console.log(itemId)
    // }

    return(
        <CartContext.Provider value={{
            cartList,
             agregarProducto, 
             vaciarCarrito,
             isInCart,
             removerItem
             }}>
             { children } 
        </CartContext.Provider>       
    )
}


export default CartContextProvider

