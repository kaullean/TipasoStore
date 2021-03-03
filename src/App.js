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
    const itemsFirebase=db.collection("items");
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
  

  return (
    <CartProvider>
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Switch>

          <Route path='/item/:id'>          
            <ItemDetailContainer item={items}/>  
          </Route>
          
          <Route path='/cart'>          
            <Cart/>  
          </Route>
         
          <Route path='/'>     
            <ItemListContainer className="d-flex flex-12" items={items} setItems={setItems} />  
          </Route>

        </Switch>

      </BrowserRouter>      
    </div>
    </CartProvider>
    
  );
}

export default App;
