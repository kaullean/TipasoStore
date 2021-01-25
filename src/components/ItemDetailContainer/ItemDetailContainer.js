import React, {useState, useEffect} from 'react'

import ItemCount from "../ItemCount/ItemCount"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {  
    const [product,setProducts]= useState([])

    useEffect(()=>{
        const call = new Promise((resolve,reject) =>{
            setTimeout(()=>{
                resolve(items)
            },2000)
    
        }
        )
    
        call.then(response => {
            console.log(response)
            setProducts(response)
        })
    },[])

    useEffect(()=>{

    },[])

    const items =[
        {id:0,
        title:"Remera One-Piece",
        description:"Remera estampada de One-Piece",
        price:142,
        stock:8,
        pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_720503-MLA25914483869_082017-W.jpg"}
    ]
    



    return(
        <div className="itemDetailContainer">
             
             <ItemDetail items={product} />
        </div>
    )
}

export default ItemDetailContainer;