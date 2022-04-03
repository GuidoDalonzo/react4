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

  const [state, setState] = useState('');
  const handleChange = (e) => {
    console.warn(e.target.value);
   
    !/[aiueoAIUEO]/.test(e.target.value) && setState(e.target.value);


  return (
    <div className="App">
      <NavBar/>

      <ItemListContainer/>
      {<ItemDetailContainer></ItemDetailContainer>}

      <input
        
        onChange={handleChange}
        type="text"
        placeholder="Ingresa una palabra"
        
        value={state}
      />

      <h2>Input Value: {state}</h2>

      <hr />

    </div>

  );

  export default App;

}


