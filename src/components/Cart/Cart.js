import React from "react";
import firebase from "firebase/app"
import {useCartContext} from "../CartContext/CartContext"
import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import "./Cart.css"
import {getFirestore} from "../../firebase/index"

const Cart =()=>{

    const {removeCarrito,carrito,clear,totalCompra,carritoFirebase}=useCartContext();
    const [orderId,setOrderId]=useState([]);
    const [buttonOff,setButtonOff]=useState(true);
    const [mensaje,setMensaje]=useState("Aun no agregaste productos al carrito")

    const [buyer,setBuyer]=useState({});
    const [buyerName,setBuyerName]=useState(false);
    const [buyerPhone,setBuyerPhone]=useState(false);
    const [buyerEmail,setBuyerEmail]=useState(false);
    const [buyerEmailAux,setBuyerEmailAux]=useState(false);

    const [resumenDeCompra,setResumenDeCompra]=useState([]);
    const [totalDeResumen,setTotalDeResumen]=useState([]);
    
    
    const handleCompra =(e)=>{
        e.preventDefault();        
        const buyerInfo={
            name:buyerName,
            phone:buyerPhone,
            email:buyerEmail
        }
        const order={buyer:buyerInfo,
            items:carritoFirebase,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total:totalCompra,
        estado:"generada"}

        const db=getFirestore()
        const orderDb=db.collection('orders')
        orderDb.add(order)
            .then(({id})=>{
                setOrderId(id)
                setMensaje("Compra Realizada!");
                setResumenDeCompra(carrito);
                setTotalDeResumen(totalCompra);
                
                clear();
                
            })
            .catch((e)=>console.log("ocurrio un error:",e))
    }
    const buyerOnChange=(e,input)=>{
        

        switch(input){
            case "nombre":
                setBuyerName(e.target.value)
                break;
            case "telefono":
                setBuyerPhone(e.target.value);
                break;
            case "email":
                setBuyerEmail(e.target.value);
                break;
            case "reEmail":
                setBuyerEmailAux(e.target.value);
                break;
        }
        console.log(buyerEmailAux);
        console.log(buyerEmail);
        
    }
    useEffect(()=>{
        if(buyerName && buyerEmail && buyerEmailAux && buyerPhone && buyerEmailAux==buyerEmail )
        {
            console.log("cambio boton");
            setButtonOff(false);            
        }
        else
            setButtonOff(true);
 
      },[buyerName,buyerEmail,buyerEmailAux,buyerPhone,buyerEmailAux])
 
    return(

        <div >
            
        {
           <div className="d-flex flex-column justify-content-center align-items-center"> 
               
                {carrito.length===0 ? <div><h1>{mensaje} </h1> 
                                        <Link to='/'><button className="mb-5 btn btn-success">Volver al inicio</button></Link></div> 
                                        :
                carrito.map(item=>{
                    return(
                        <div className="cartItem mx-auto d-flex flex-row col-10 align-items-center" key={item.item.id}>
                            <img className="col-2" src={item.item.pictureUrl} />
                            <h1 className="col-4">{item.item.title} </h1>
                            <h2 className="col-4">{item.quantity} </h2>
                            <button className="col-2" onClick={()=>removeCarrito(item.item.id)} > Borrar</button>    
                        </div>
                    )
                })               
                }
                {orderId.length!=0 && <div className="p-3 brief d-flex flex-column justify-content-aroun">
                        <h1 className="pb-3">Id de la compra: {orderId} </h1>
                        {
                            resumenDeCompra.map(item=>{
                                return(
                                    <div className="bg-dark d-flex flex-row align-items-center justify-content-between" key={item.item.id}>
                                        <img className="col-2" src={item.item.pictureUrl} />
                                        <h1 className="col-4">{item.item.title} </h1>
                                        <h2 className="col-4">{item.quantity} </h2>                              
                                    </div>
                                )
                            })
                        }
                        <h1 className="pt-3">Total: ${totalDeResumen} </h1>
                    </div>
                    
                }
            
                {totalCompra>0 &&  
                    <div className="col-6">
                        <h1>TOTAL: ${totalCompra} </h1>
                        <div>                        
                            <form onSubmit={handleCompra}>
                                <input onChange={(e)=>buyerOnChange(e,"nombre")} type="text" className="form-control" placeholder="First name" aria-label="First name" />                            
                                <input onChange={(e)=>buyerOnChange(e,"telefono")} type="tel" placeholder="Telefono" arial-label="Telefono" />
                                <input onChange={(e)=>buyerOnChange(e,"email")} type="email" placeholder="Email" arial-label="Tu email"/>
                                <input onChange={(e)=>buyerOnChange(e,"reEmail")} type="email" placeholder="Confirmar Email" arial-label="Comfirmar email"/>
                                <input type="submit" disabled={buttonOff} value="Finalizar compra"/>
                            </form>                        
                        </div>                   
                    </div>}
           
            </div>
          
        }
        </div>
        
    )
}
export default Cart;