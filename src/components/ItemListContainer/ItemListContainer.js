import React, {useState, useEffect} from 'react'
import "./ItemListContainer.css"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({item}) => {  
    return(                 
        <ItemList items={item} />
    )
}

export default ItemListContainer;