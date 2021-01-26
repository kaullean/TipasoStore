import React, {useState, useEffect} from 'react'
import ItemCount from "../ItemCount/ItemCount"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {  
    const [product,setProduct]= useState({})

    useEffect(()=>{
        const call = new Promise((resolve,reject) =>{
            setTimeout(()=>{
                resolve(items)
            },2000)
    
        })
        call.then(response => {
            console.log(response)
            setProduct(response)
        })
    },[])


    const items ={id:0,
                title:"Remera One-Piece",
                description:"Remera estampada de One-Piece color negro, medidas 10 x 10 x 10 para estar facherito en tu primera cita y que todos en el resto de 5 estrellas sepan que estan frente al mejor pirata ",
                price:142,
                stock:8,
                pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_720503-MLA25914483869_082017-W.jpg"
    }

    return(
        <div className="itemDetailContainer">
             
             <ItemDetail item={product} />
        </div>
    )
}

export default ItemDetailContainer;