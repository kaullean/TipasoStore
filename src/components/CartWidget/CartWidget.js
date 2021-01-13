import React from 'react';
import logo from '../../cartIco.svg';
import "./CartWidget.css"
const CartWidget = () => {

    return(
        <div className="CartWidget">            
            <img src={logo} alt="Logo" height="50px" width="50px"/>
            <h3 className="CartWidget__count">0</h3>
        </div>
    )
}


export default CartWidget;