import React from 'react'

import "./NavBar.css"
const NavBar = () => {

    return(
        <div className="containerNavBar">
            <div className="containerMenu">
                <a className="containerMenu__link px-3">Home</a>
                <a className="containerMenu__link px-3">Catalogo</a>
                <a className="containerMenu__link px-3">Contacto</a>
            </div>   
            <div className="containerBrand">
            
               <h1>Tipaso-Store</h1>

            </div>   

        </div>   
    )
}

export default NavBar;