import React from "react";
import ItemCount from "../ItemCount/ItemCount"
const ItemDetail = ({items}) => {  
   console.log(items);
    return(
        <div className="itemListContainer">
             <div className="col-10 d-flex">
             <div className="col-3" key={items.id} >
                 {items.title}<br></br>
                 ${items.price}<br></br>
                 <img src={items.pictureUrl} height="100px" width="100px"/>
                 <ItemCount stock={items.stock} initial={1} />
                 </div>
             </div>
        </div>
    )
}
export default ItemDetail;