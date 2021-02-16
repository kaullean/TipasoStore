import React, {useState, useEffect} from 'react'
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import ItemListPanelBar from "../ItemListPanelBar/ItemListPanelBar"
const ItemListContainer = ({items,setItems}) => {  
    
    return(  
        <div>  
            <ItemListPanelBar className="col-3 itemListPanelBar" items={items} setItems={setItems}/>
           
            <ItemList items={items} />
        </div> 
    )
}

export default ItemListContainer;