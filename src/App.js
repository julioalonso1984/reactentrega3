import './App.css';
import ItemListContainer from './Components/Navbar/ItemListContainer';
import Navbar from './Components/Navbar/Navbar';

function App() {
  
  const productos = [
    {id:1, producto:"Heladera", precio:90000},
    {id:2, producto:"Computadora", precio:150000},
    {id:3, producto:"Lavajillas", precio:160000}
    ]
  
  const items = productos.map(items => (
    <ItemListContainer valor={items} />
  ))

  return (
    <div>
      <Navbar />
      <hr />
      <ul>
        {items}
      </ul>
      
    </div>
  );
}

export default App;
