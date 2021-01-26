import React from "react";
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
const ItemDetail = ({item}) => {  
   console.log(item);
    return(
        <div className="itemDetailContainer">
             <div className="col-12 d-flex container">
             {typeof(item.title)!=='undefined' && <div className="col-12" key={item.id} >
                 <h1 className="text-info col-12">{item.title}</h1> 
                 <div className="col-12 d-flex my-5">               
                    <img className="col-4" src={item.pictureUrl} />
                    <p className="text-success d-flex mx-5 align-items-center">{item.description} </p>
                 </div> 
                 <h1 className="text-info">Precio: ${item.price}</h1>    
                 <ItemCount stock={item.stock} initial={1} />
                 </div>}
             </div>
        </div>
    )
}
export default ItemDetail;