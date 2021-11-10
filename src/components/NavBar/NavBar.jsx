import './navBar.css'
import CartWidget from './CartWidget'
import menu from './menu.png'
import logo from './logo.png'


function NavBar() {

    return (
        <nav className="nav">
            <img className="nav__logo" src={logo} alt="logo" />
            <CartWidget className="nav__cart"/>
            <div className="nav__menu">
                <img src={menu} alt="menu" />
                <div className="nav__menu-items">
                    <p>MARVEL COMICS</p>
                    <p>DC ENTERTAINMENT</p>
                    <p>IMAGE COMICS</p>
                </div>
            </div>
        </nav>
    )
}

export default NavBar


