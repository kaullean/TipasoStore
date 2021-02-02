import React, {useState} from 'react';
import "./ItemCount.css"
import {Link} from "react-router-dom"
function ItemCount ({onAdd,onSubtract,addToCart,count,mostrar}) {
    
    
    return(
        <div> 
            { !mostrar ? 
                <div className="addToCartContainer">
                    <button onClick={onAdd}>+</button>
                    <span>{count}</span>
                    <button onClick={onSubtract}>-</button>
                    <button onClick={addToCart}>Agregar al carrito</button>
                </div> :
             
                <Link to="/cart"><button className="finalizarCompra">Finalizar compra</button></Link>
       
             
                
            }       
            
            </div>       
    )
}

export default ItemCount;