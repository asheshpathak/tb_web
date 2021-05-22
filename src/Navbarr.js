import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './Navbarr.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Navbarr() {

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <nav className='navbar navbar-light navbar-expand-lg p-1'>
            <Link className='nav-link' to='/'>  <span className="navbar-brand font-weight-bolder">
                <img
                    alt="navbar navbar-brand logo"
                    src="Assets\Tribal_Basket_Packaging_and_Logo_Assets-02.png"
                    height="50vw"
                    width="50vw"
                    className=" mr-2 navbar__logo" />Tribal Basket</span>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="hamburger navbar-toggler-icon"></span>
            </button>
            <div
                className="collapse navbar-collapse"
                id="collapsibleNavbar">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link font-weight-bold" to="/login">
                            <div onClick={handleAuthentication} className="header__option">

                                <div className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</div>
                                <span className="header__optionLineOne">Hello, {user ? user?.email.split("@")[0] : "Guest"}</span>

                            </div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link font-weight-bold" to="/aboutus">
                            About Us
                </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link font-weight-bold" to="/contactus">
                            Contact Us
                </Link>
                    </li>
                    <li className="nav-item mr-2">
                        <Link className="nav-link font-weight-bold" to="/checkout">
                            <ShoppingBasketIcon />
                            <span className="header__basketCount ml-2">
                                {basket?.length}
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbarr;

{/* <Navbar className='navbar' expand="lg">
    <Navbar.Brand href="/" ><img className="navbar__logo mr-2" src="Assets\Tribal_Basket_Packaging_and_Logo_Assets-02.png" />Tribal Basket</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            <Nav.Link href="/">Sign In</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            <Nav.Link href="#link">Track Order</Nav.Link>
            <div className='basket'>
                <Nav.Link href="/checkout"><ShoppingBasketIcon /></Nav.Link>
                <span className="header__basketCount">
                    {basket?.length}
                </span>
            </div>

        </Nav>
    </Navbar.Collapse>
</Navbar> */}
