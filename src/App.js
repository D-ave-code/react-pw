import './App.css';
import { Header } from './header/Header';
import { BarraBusqueda } from './barrabusqueda/BarraBuscar';
import { Categorias } from './categorias/Categorias';
import { Home } from './home/Home';
import { PSesion, getToken} from './pagina-sesion/iniciarSesion';
import { FooterP } from './footer/Footer';
import { Pregistro } from './pagina-registro/pagina-registro';
import {HashRouter,Route,Routes,Link} from 'react-router-dom'
import { Catalogo } from './catalogos/Catagolo';
import { AuthUsers } from './AuthUsers';
function App() {
  return (
    <HashRouter>
    <div className="App">
          <header className="App-header">
            <Header/>
          </header>
          <main>
            <div className='nombre-titulo'>
              <Link to='/'>Zapatos</Link>
            </div>
          <BarraBusqueda/>
          <div className='carrtio-boton'>
              <a href="/">Carrito Vacio</a>
          </div>
            <Categorias/>
                <Routes>
                    <Route path = "/" element = {<Home/>} />
                    <Route path = "/sesion" element = {<PSesion/>}/>
                    <Route path="/registrar" element={<Pregistro/>}/>
                    <Route path='/usuario'element={<AuthUsers/>}/>
                    <Route path='/Catalogo/:categoria' element={<Catalogo/>}/>
                </Routes>
          </main>
        
          <footer>
            <FooterP/>
          </footer>
        </div>
    </HashRouter>
  );
}

export default App;
