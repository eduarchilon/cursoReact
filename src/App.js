import './App.css';
import NavBar from '../src/components/NavBar/NavBar'
import ItemListContainer from './components/Container/ItemListContainer';


/*variables*/
let titulo = 'Bienvenido Coders!'
let subtitulo = 'Vamos a aprender React'

function App() {
  return (
    <>
      <div className='App'>
        <NavBar />
        <ItemListContainer titulo={titulo} subtitulo={subtitulo}/>
      </div>
    </>
  );
}

export default App;
