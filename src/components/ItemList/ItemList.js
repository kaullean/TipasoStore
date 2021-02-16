import React from "react";
import "./ItemList.css"
import {Link} from "react-router-dom"

const ItemList = ({items,setItems}) => {  
    
    return(
        <div className="itemListContainer col-9 d-flex flex-wrap">
            
             
                  <div className="col-9 d-flex flex-wrap">
                    {items && items.map(item => 
                     
                     <Link className="col-3 m-3 p-3 itemCard d-flex" to={`item/${item.id}`} key={item.id} >
                        <div className="d-flex row justify-content-center" >                        
                            <h1 >{item.title}</h1>
                            <h1>${item.price}</h1>
                            <img className="col-6 my-3"src={item.pictureUrl} />
                        </div>
                    </Link>
                    )}</div>
                
             
             
        </div>
    )
}
export default ItemList;
