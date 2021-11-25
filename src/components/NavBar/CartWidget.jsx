import './navBar.css'
import cart from './cart.png'

function CartWidget() {
    return (
        <>
        <div className="nav__cart">
            <img src={cart} alt="" />
            <p>0 prod.</p>
        </div>
        </>
    )
}

export default CartWidget