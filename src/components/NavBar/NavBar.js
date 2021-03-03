import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"
import {Link} from "react-router-dom"
const NavBar = () => {

    return(
        <div className="containerNavBar ">
            <div className="containerMenu pt-3 pb-3">
                <a className="containerMenu__link animated-button victoria-two px-3 " href="#">Home</a>
                <a className="containerMenu__link animated-button victoria-two px-3" href="#">Contacto</a>
                <CartWidget/>
            </div>  
            <Link to='/'>
                <div className="containerBrand pt-5">
                
                    <h1>Tipazo-Store</h1>

                </div>   
            </Link> 
        </div>   
    )
}

export default NavBar;