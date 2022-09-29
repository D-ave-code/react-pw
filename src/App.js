import './App.css';
import { Header } from './header/Header';
import { BarraBusqueda } from './barrabusqueda/BarraBuscar';
import { Categorias } from './categorias/Categorias';
import { Home } from './home/Home';
import { PSesion } from './pagina-sesion/iniciarSesion';
import { FooterP } from './footer/Footer';
import {HashRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
       <HashRouter>
      <header className="App-header">
        <Header/>
      </header>
      <main>
        <div className='nombre-titulo'>
          <h1>Zapatos</h1>
        </div>
       <BarraBusqueda/>
       <div className='carrtio-boton'>
          <a href="/">Carrito Vacio</a>
       </div>
        <Categorias/>
            <Routes>
                  <Route path = "/" element = {<Home/>} />
                 <Route path = "/sesion" element = {<PSesion/>} />
            </Routes>
      </main>
      </HashRouter>
      <footer>
         <FooterP/>
      </footer>
    </div>
  );
}

export default App;
