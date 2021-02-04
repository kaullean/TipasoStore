import React, { useState, useContext } from "react";

export const CartContext = React.createContext()

export const useCartContext= () => useContext(CartContext);

export const CartProvider = ({children}) =>{

    
    const [carrito, setCarrito]=useState([])

    function addCarrito(item,quantity) {
        let carritoAux=carrito;
        if(!isInCart(item.id)){       
            let itemAux={item,quantity};
            carritoAux.push(itemAux);
            setCarrito(carritoAux);   
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
        }
    }
    function removeCarrito(item){
        //Aca deberia hacer un slice borrando el item y corriendo el array una posicion para que no quede vacio en esa posicion
        
    }
    function clear(){
        setCarrito([]);
    }
    function isInCart(id){        
        for(let i=0;i<carrito.length;i++)
        {
            
            if(carrito[i].item.id===id)
            {       
                console.log("asd");
                return true;
            }
        }
        return false;
    }
    return(
        <CartContext.Provider value={{addCarrito, clear, removeCarrito,carrito}} >{children} </CartContext.Provider>
    )
}