import React from "react";
import "./ItemList.css"
import ItemCount from "../ItemCount/ItemCount"
const ItemList = ({items}) => {  
   
    return(
        <div className="itemListContainer">
             <div className="col-10 d-flex">
             {items && items.map(item => <div className="col-3" key={item.id} >
                 {item.title}<br></br>
                 ${item.price}<br></br>
                 <img src={item.pictureUrl} height="100px" width="100px"/>
                 <ItemCount stock={item.stock} initial={1} />
                 </div>)}
             </div>
        </div>
    )
}
export default ItemList;
