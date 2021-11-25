import './App.css';
import '../src/app/web'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from '../src/components/NavBar/NavBar'
import ItemListContainer from './components/Container/ItemListContainer';
import Cart from '../src/components/Container/Cart'
import ItemDetailContainer from '../src/components/Container/ItemDetailContainer'

/*variables*/
let titulo = 'Bienvenido Coders!'
let subtitulo = 'Vamos a aprender React'



function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route exact path='/' element={
            <ItemListContainer titulo={titulo} subtitulo={subtitulo}/>
          }/>
          <Route exact path='/categoria/:idCategoria' element={
            <ItemListContainer titulo={titulo} subtitulo={subtitulo}/>
          }/>
          <Route exact path='/cart' element={
            <Cart />
          }/>
          <Route exact path='detail/:idProducto' element={
              <ItemDetailContainer />
          }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
