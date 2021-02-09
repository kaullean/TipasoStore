import React from 'react';
import logo from '../../cartIco.svg';
import "./CartWidget.css"
import {Link} from "react-router-dom"
import {useCartContext} from "../CartContext/CartContext"

const CartWidget = () => {
    
    const {cantidadDeProductos}=useCartContext();
   
    return(
        <Link to='/cart'>
            <div className="CartWidget">            
                <img src={logo} alt="Logo" height="50px" width="50px"/>
                <h3 className="CartWidget__count">{cantidadDeProductos}</h3>
            </div>
        </Link>
    )
}


export default CartWidget;