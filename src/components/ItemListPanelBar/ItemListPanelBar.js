import React from "react";
import FilterButton from '../FilterButton/FilterButton';






const ItemListPanelBar=({items,setItems})=>{

    return(
        <div className="d-flex col-3">
            <div>
                <h2>Filtrar Por Producto</h2>
                <FilterButton nombreDelBoton="Filtrar ropa" setItems={setItems} items={items} campo="categoryId" condicion="==" valor="mz7iTHVBC39H2YTBSUxq" />
                <FilterButton nombreDelBoton="Filtrar Accesorios" setItems={setItems} items={items} campo="categoryId" condicion="==" valor="kV23y1I1EXbc1pNeuTQM" />             
            
            </div>

            <div>
                <h3>Filtrar Por Precio</h3>
            </div>
        </div>
    )
}



export default ItemListPanelBar;