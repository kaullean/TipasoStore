import React, {useState, useEffect} from 'react'
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"

import FilterButton from "../FilterButton/FilterButton"
const ItemListContainer = ({items,setItems}) => {  
    
    return(  
        <div>  
             <div>
                <h2>Filtrar Por Producto</h2>
                <FilterButton nombreDelBoton="Filtrar ropa" setItems={setItems} items={items} campo="categoryId" condicion="==" valor="mz7iTHVBC39H2YTBSUxq" />
                <FilterButton nombreDelBoton="Filtrar Accesorios" setItems={setItems} items={items} campo="categoryId" condicion="==" valor="kV23y1I1EXbc1pNeuTQM" />             
                <FilterButton nombreDelBoton="Todo" setItems={setItems} items={items} campo="categoryId" condicion="mostrarTodo" valor="" />
            </div>
            <ItemList items={items} />
        </div> 
    )
}

export default ItemListContainer;