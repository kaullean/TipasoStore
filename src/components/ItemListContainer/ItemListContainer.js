import React from 'react'
import "./ItemListContainer.css"
import ItemCount from "../ItemCount/ItemCount"
const ItemListContainer = () => {
    

   
    return(
        <div className="itemListContainer">
             <ItemCount stock={10} initial={1} />
        </div>
    )
}

export default ItemListContainer;