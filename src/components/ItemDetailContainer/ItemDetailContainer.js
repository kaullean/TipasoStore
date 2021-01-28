import React, {useState, useEffect} from 'react'
import ItemCount from "../ItemCount/ItemCount"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = ({item}) => {  
    const [product,setProduct]= useState({})




    return(
        <div className="itemDetailContainer d-flex justify-content-center">
             <ItemDetail items={item} />
        </div>
    )
}

export default ItemDetailContainer;