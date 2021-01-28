import React, {useState} from 'react';
import "./ItemCount.css"

function ItemCount ({stock, initial}) {
    const [count, setCount]= useState(initial)
   
    
    function onAdd(){
        if(count<stock)
        setCount(count+1);

        else
        console.log("No se puede agregar mas stock");
    }

    function onSubtract(){       

        if(count>0)
        setCount(count-1);

        else
        console.log("No se puede Quitar mas stock");
    }

    return(
        <div>
            <button className="btn btn-success">Comprar</button>
            <button onClick={onAdd}>+</button>
            <span>{count}</span>
            <button onClick={onSubtract}>-</button>
        </div>       
    )
}

export default ItemCount;