import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  const mensaje = "Hello World!"
  return (
    <div className='container-flex'>
    <NavBar/>
    <div className='m-2'>
    <ItemListContainer greeting={mensaje}/>
    </div>
    </div>
  );
}

export default App;
