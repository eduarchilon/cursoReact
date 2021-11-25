import './navBar.css'
import CartWidget from './CartWidget'
import menu from './menu.png'
import logo from './logo.png'
import {Link} from 'react-router-dom'


function NavBar() {

    return (
        <nav className="nav">
            <Link to="/">
            <img className="nav__logo" src={logo} alt="logo" />
            </Link>
            <Link to='/cart'>
                <CartWidget className="nav__cart"/>
            </Link>
            <div className="nav__menu">
                <img src={menu}  id="btn-menu" alt="menu" />
                <div className="nav__menu-items" id="menu-items">
                <Link to='/' className="link">
                        <p className="btn-menu-item">TODOS</p>
                    </Link>
                    <Link to='/categoria/marvel' className="link">
                        <p className="btn-menu-item">MARVEL COMICS</p>
                    </Link>
                    <Link to='/categoria/dc' className="link">
                        <p className="btn-menu-item">DC ENTERTAINMENT</p>
                    </Link>
                    <Link to='/categoria/image' className="link">
                        <p className="btn-menu-item">IMAGE COMICS</p>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar


