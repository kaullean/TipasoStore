import React, { useState, useContext } from "react";

export const CartContext = React.createContext()

export const useCartContext= () => useContext(CartContext);

export const CartProvider = ({children}) =>{

    const [cantidadDeProductos, setCantidadDeProductos]=useState(0)
    const [carrito, setCarrito]=useState([])
  
    function addCarrito(item,quantity) {
        let cantidad=cantidadDeProductos;
        let carritoAux=carrito;
       
        if(!isInCart(item.id)){  
            console.log(item.id);     
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
    }

    function removeCarrito(id){
        let carritoAux=carrito;
        let cantidad=cantidadDeProductos;
        carrito.map((itemSeleccionado,index)=>{
            console.log(index);
            if(itemSeleccionado.item.id===id)
            {          
                carritoAux.splice(index, 1);
                setCarrito(carritoAux);
                cantidad-=itemSeleccionado.quantity;
                setCantidadDeProductos(cantidad); 
            }          

        })
       
    }

    function clear(){
        setCarrito([]);
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
        <CartContext.Provider value={{addCarrito, clear, removeCarrito,carrito,cantidadDeProductos}} >{children} </CartContext.Provider>
    )
}