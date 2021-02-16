import React from "react";
import {useCartContext} from "../CartContext/CartContext"
import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import "./Cart.css"
const Cart =()=>{
    const {removeCarrito,carrito}=useCartContext();
    
    let total=0;
    const item={
        id:"",
        title:"",
        price:0
    }
    console.log(total);
    const buyer={
        name:"Leandro",
        phone:"1140404040",
        email:"leandro@gmail.com"
    }
    carrito.map((item)=>{

        total=item.item.price*item.quantity+total;       
        
    })
    
    return(

        <div>
            
        {
           <div> {carrito.length===0 ? <div><h1>Aun no agregaste productos al carrito</h1> 
                                       <Link to='/'><button className="btn btn-success">Volver al inicio</button></Link></div> :
            carrito.map(item=>{
                return(
                    <div className="cartItem mx-auto d-flex flex-row col-10 align-items-center" key={item.item.id}>
                        <img className="col-2" src={item.item.pictureUrl} />
                        <h1 className="col-4">{item.item.title} </h1>
                        <h2 className="col-4">{item.quantity} </h2>
                        <button className="col-2" onClick={()=>removeCarrito(item.item.id)}> Borrar</button>    
                    </div>
                )
            })
            }
            <h1>TOTAL:{total} </h1>
            <button>Finalizar compra</button>
            </div>
          
        }
        </div>
        
    )
}
export default Cart;