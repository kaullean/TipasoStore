import React from "react";
import firebase from "firebase/app"
import {useCartContext} from "../CartContext/CartContext"
import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import "./Cart.css"
import {getFirestore} from "../../firebase/index"
const Cart =()=>{
    const {removeCarrito,carrito}=useCartContext();
    const [order,setOrder]=useState({})
    const [orderId,setOrderId]=useState([])

    let totalCompra=0;

    const buyerInfo={
        name:"Leandro",
        phone:"1140404040",
        email:"leandro@gmail.com"
    }
    carrito.map((item)=>{
        /*const aux={id:"",title:"",price:0}
        aux.id=item.item.id;
        aux.price=item.item.price;
        aux.title=item.item.title;*/
        totalCompra=item.item.price*item.quantity+totalCompra;         
    })
    
    useEffect(()=>{
        setOrder({
            buyer:buyerInfo,
            items:carrito,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total:totalCompra
        })
    },[totalCompra])
    
    const handleCompra =()=>{
        const db=getFirestore()
        const orderDb=db.collection('orders')
        orderDb.add(order)
            .then(({id})=>{
                setOrderId(id)
            })
            .catch((e)=>console.log("ocurrio un error:",e))
    }
    
    return(

        <div>
            
        {
           <div> {carrito.length===0 ? <div><h1>Aun no agregaste productos al carrito</h1> 
                                       <Link to='/'><button className="btn btn-success">Volver al inicio</button></Link></div> 
                                    :
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
            {orderId.length!=0 && <div><h1>Id de la compra:{orderId}</h1></div>}
            
            {totalCompra>0 &&  <div>
                <h1>TOTAL:{totalCompra} </h1>
                <button onClick={handleCompra} >Finalizar compra</button>
                </div>}
           
            </div>
          
        }
        </div>
        
    )
}
export default Cart;