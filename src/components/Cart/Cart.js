import React from "react";
import {useCartContext} from "../CartContext/CartContext"
import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
const Cart =()=>{

  
    const {removeCarrito,carrito}=useCartContext();
    console.log(carrito);



    return(

        <div>
            <h1>Funciono</h1>
        {
           <div> {carrito.length===0 ? <div><h1>Aun no agregaste productos al carrito</h1> 
                                       <Link to='/'><button className="btn btn-success">Volver al inicio</button></Link></div> :
            carrito.map(item=>{
                return(
                    <div key={item.item.id}>
                        <img src={item.item.pictureUrl} />
                        <h1>{item.item.title} </h1>
                        <h2>{item.quantity} </h2>
                        <button onClick={()=>removeCarrito(item.item.id)}> Borrar</button>    
                    </div>
                )
            })
            }
            </div>
          
        }
        </div>
        
    )
}
export default Cart;