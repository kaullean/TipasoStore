import React, { useEffect } from 'react';
import {getFirestore} from "../../firebase/index"

const FilterButton=({items,setItems,campo,condicion,valor,nombreDelBoton})=>{
    //const [itemsAux,setItemsAux]=useEffect([])
    
    function filtrar(){
        let db=getFirestore();

        let itemsFirebase=db.collection("items");
        const ropa=itemsFirebase.where(campo,condicion,valor)
        ropa.get().then((querySnapshot)=>{

        if(querySnapshot.size===0){
            console.log("Sin resultados");
        }

        setItems([]);

        setItems(querySnapshot.docs.map((doc)=>{
            return({id:doc.id,...doc.data()
                
            })

        }))

        });
    }
    return(
        <button onClick={filtrar}>{nombreDelBoton}</button>
    )
}
export default FilterButton;