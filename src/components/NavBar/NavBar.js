import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"
const NavBar = () => {

    return(
        <div className="containerNavBar pt-3">
            <div className="containerMenu">
                <a className="containerMenu__link animated-button victoria-two px-3 " href="#">Home</a>
                <a className="containerMenu__link animated-button victoria-two px-3" href="#">Catalogo</a>
                <a className="containerMenu__link animated-button victoria-two px-3" href="#">Contacto</a>
                <CartWidget/>
            </div>   
            <div className="containerBrand">
            
               <h1>Tipazo-Store</h1>

            </div>   

        </div>   
    )
}

export default NavBar;