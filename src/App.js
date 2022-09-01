import './App.css';
import ItemListContainer from './Components/Navbar/ItemListContainer';
import Navbar from './Components/Navbar/Navbar';

function App() {
  //const productos = ["Heladera", "Computadora", "Lavavajillas"]
  const productos = [
    {id:1, producto:"Heladera", precio:90000},
     {id:2, producto:"Computadora", precio:150000},
    {id:3, producto:"Lavajillas", precio:160000}
    ]
  //const productos = ["Heladera", "Computadora", "Lavajillas"];
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
      {/* <ItemListContainer items = {productos} titulo="productos en venta" /> */}
    </div>
  );
}

export default App;
