import './App.css';
import CartWidget from './components/cart-widget/CartWidget';
import ItemCount from './components/item-count/ItemCount';
import ItemListContainer from './components/item-list-container/ItemListContainer';
import NavBar from "./components/NavBar";
import Item from "./components/Promises/Item"


function App() {
  return (
    <div className="App">
      <NavBar>
        
      </NavBar>
      
      <ItemListContainer greeting="Event-Planner">
      <h3>
        Salones
      </h3>

      <button>Ver salones</button>
      <button>Volver</button>
      <ItemCount/>

      <Item />

      </ItemListContainer>
      
      
      
      
    </div>
  );
}

export default App;
