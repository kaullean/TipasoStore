import React, { useState, useContext } from "react";

export const CartContext = React.createContext()

export const useCartContext= () => useContext(CartContext);

export const CartProvider = ({children}) =>{

    const [cantidadDeProductos, setCantidadDeProductos]=useState(0)
    const [carrito, setCarrito]=useState([])
    const [totalCompra,setTotalCompra]=useState(0);
    const [carritoFirebase,setCarritoFirebase]=useState([])
    function addCarrito(item,quantity) {
        let cantidad=cantidadDeProductos;
        let carritoAux=carrito;
       
        if(!isInCart(item.id)){       
            let itemAux={item,quantity};
            carritoAux.push(itemAux);
            setCarrito(carritoAux); 
            cantidad+=quantity; 
            setCantidadDeProductos(cantidad);         
        }      
        else 
        {  
           carritoAux.map(i=>{
                if(i.item.id===item.id)
                {                                
                    i.quantity=i.quantity+quantity;
                }          

            })
            setCarrito(carritoAux)
            cantidad+=quantity;
            setCantidadDeProductos(cantidad);    
        }
        actualizarTotalCompra(carritoAux);
    }
    function actualizarTotalCompra(carritoActualizado){
        let carritoAux=[];
        let totalAux=0;
        console.log(carritoActualizado);
        carritoActualizado.map((item)=>{
            carritoAux.push({id:item.item.id,
                             quantity:item.quantity })
            
            totalAux=item.item.price*item.quantity+totalAux;
            console.log("map");
        })
        setCarritoFirebase(carritoAux);
        setTotalCompra(totalAux);
    }
    function removeCarrito(id){
        let carritoAux=carrito;
        let cantidad=cantidadDeProductos;
        carrito.map((itemSeleccionado,index)=>{
            if(itemSeleccionado.item.id===id)
            {          
                carritoAux.splice(index, 1);
                setCarrito(carritoAux);
                cantidad-=itemSeleccionado.quantity;
                setCantidadDeProductos(cantidad); 
            }          

        })
       actualizarTotalCompra(carritoAux);
    }

    function clear(){
        setCantidadDeProductos(0);
        setCarrito([]);
        setTotalCompra(0);
        
    }

    function isInCart(id){        
        for(let i=0;i<carrito.length;i++)
        {
            
            if(carrito[i].item.id===id)
            {       
                return true;
            }
        }
        return false;
    }

    return(
        <CartContext.Provider value={{addCarrito, clear, removeCarrito,carrito,cantidadDeProductos,totalCompra,carritoFirebase}} >{children} </CartContext.Provider>
    )
}
