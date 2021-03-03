import React from "react";
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import {useCartContext} from "../CartContext/CartContext"
import {getFirestore} from "../../firebase/index"

const ItemDetail = ({items}) => {  
    const [product,setProduct]= useState({})
    const {addCarrito}=useCartContext();
    const {id}=useParams()
    
    useEffect(()=>{
        //setLoading(true)
        let db=getFirestore();
        const itemsFirebase=db.collection("items");
        const item=itemsFirebase.doc(id);
        item.get().then((doc)=>{
            if(doc.exist){
              //  console.log("El producto no existe");
                return;
            }
            console.log("Item encontrado"+id);
            setProduct({id:id,...doc.data()});

        }).catch((error)=>{
           // console.log("Error al buscar el item",error);
        })
 
      },[])
    const [count, setCount]= useState(1);
    const [mostrar,setMostrar]=useState(false);
    function onAdd(){
        if(count<product.stock)
        setCount(count+1);

        else
        console.log("No se puede agregar mas stock");
    }

    function onSubtract(){       

        if(count>1)
        setCount(count-1);

        else
        console.log("No se puede Quitar mas stock");
    }
    function  addToCart() {
    //    setCantidad(count);
    //  setMostrar(true);  
        
        addCarrito(product,count)
        }

    return(    
             
             
               (typeof(product.title)!=="undefined") && <div className="sarasa d-flex  flex-row flex-wrap" key={product.id} >
                    <h1 className="col-12 my-5">{product.title}</h1>                                   
                    <img className="col-6" src={product.pictureUrl}/>                    
                    <div className="col-6 d-flex flex-row flex-wrap align-items-center justify-content-center"> 
                        <p className="mt-5 col-12">{product.description} </p>
                        <h1 className="col-12">Precio: ${product.price}</h1>    
                        <ItemCount {...{onAdd,onSubtract,addToCart,count,mostrar,setMostrar}} className="col-12" stock={product.stock} />
                    </div> 
                  
                </div>
             
        
    )
}
export default ItemDetail;