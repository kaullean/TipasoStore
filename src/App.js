import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import {BrowserRouter, Switch, Route} from 'react-router-dom'

const items =[

  {id:0,
  title:"Remera One-Piece",
  description:"Remera estampada de One-Piece",
  price:142,
  stock:8,
  pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_720503-MLA25914483869_082017-W.jpg"},

  {id:1,
  title:"Remera La Renga",
  description:"Remera estampada de La renga",
  price:122,
  stock:11,
  pictureUrl:"https://www.arteinfernal.com/wp-content/uploads/2019/11/remera-larenga-30-anos-azul.jpg"},

  {id:2,
  title:"Remera DBZ",
  description:"Remera estampada de DBZ",
  price:200,
  stock:5,
  pictureUrl:"https://d26lpennugtm8s.cloudfront.net/stores/903/627/products/729855-mla29905057204_042019-o-e3a0ff8967299585ca15561630841592-640-0.jpg"},

  {id:3,
  title:"Remera Naruto",
  description:"Remera estampada de Naruto",
  price:160,
  stock:7,
  pictureUrl:"https://www.planetatres.com.ar/tienda-online/3342/remera-naruto-konoha.jpg"},

  {
  id:4,
  title:"Remera El indio",
  description:"Remera estampada de El indio",
  price:180,
  stock:7,
  pictureUrl:"https://http2.mlstatic.com/remera-indio-solari-logo-patricio-rey-redonditos-de-ricota-D_Q_NP_969468-MLA31125377657_062019-F.webp"
  },
  {id:5,
    title:"Remera DBZ",
    description:"Remera estampada de DBZ",
    price:200,
    stock:5,
    pictureUrl:"https://d26lpennugtm8s.cloudfront.net/stores/903/627/products/729855-mla29905057204_042019-o-e3a0ff8967299585ca15561630841592-640-0.jpg"},
  
]

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>

          <Route path='/item/:id'>          
            <ItemDetailContainer item={items}/>  
          </Route>

          <Route path='/cart'>          
               <div>Soy el carrito</div>  
          </Route>

          <Route path='/'>          
            <ItemListContainer item={items}/>  
          </Route>

        </Switch>

      </BrowserRouter>
    </div>
    
  );
}

export default App;
