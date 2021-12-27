import './navBar.css'
import cart from './cart.png'
import { useCartContext } from '../../context/CartContext'

function CartWidget() {

    const {cartList} = useCartContext()

    let cant = 0;

    cartList.forEach(element => {
        cant+=element.cantidad
    });

    return (
        <>
        <div className="nav__cart">
            <img src={cart} alt="" />
            <p>{cant} prod.</p>
        </div>
        </>
    )
}

export default CartWidget