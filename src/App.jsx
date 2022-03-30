import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';


function App() {

  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos`);
  };


  return (
    <div className="App">
      <NavBar/>

      <ItemListContainer/>
      {<ItemDetailContainer></ItemDetailContainer>}
    </div>

  );

    
}

export default App;
