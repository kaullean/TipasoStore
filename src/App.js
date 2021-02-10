import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {CartProvider} from "./components/CartContext/CartContext"
import CartContext from "./components/CartContext/CartContext"
import Cart from "./components/Cart/Cart"
import {getFirestore} from "./firebase/index"
import { useEffect, useState } from 'react';



function App() {
  const[items,setItems]=useState([])
  
  useEffect(()=>{
    //setLoading(true)
    let db=getFirestore();
    const itemsFirebase=db.collection("items").limit(6);
    itemsFirebase.get()
      .then((querySnapshot)=>{
        querySnapshot.size === 0 && console.log("No hay items");
        
        setItems(querySnapshot.docs.map((doc)=>{
          return({id:doc.id,
            ...doc.data()
          })
        }))
        
        
      })


  },[])
  const filtrarRopa=()=>{
    
      let db=getFirestore();

    let itemsFirebase=db.collection("items");
    const ropa=itemsFirebase.where('categoryId','==','mz7iTHVBC39H2YTBSUxq')
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
  const filtrarAccesorios=()=>{
    
    let db=getFirestore();

  let itemsFirebase=db.collection("items");
  const ropa=itemsFirebase.where('categoryId','==','kV23y1I1EXbc1pNeuTQM')
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
  return (
    <CartProvider>
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <button onClick={filtrarRopa}>FiltrarRopa</button>
        <button onClick={filtrarAccesorios}>FiltrarAccesorios</button>
        <Switch>
          
          <Route path='/item/:id'>          
            <ItemDetailContainer item={items}/>  
          </Route>
          
            <Route path='/cart'>          
                <Cart/>  
            </Route>
         
          <Route path='/'>          
            <ItemListContainer item={items}/>  
          </Route>

        </Switch>

      </BrowserRouter>      
    </div>
    </CartProvider>
    
  );
}

export default App;
