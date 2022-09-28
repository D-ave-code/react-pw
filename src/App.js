import './App.css';
import { Header } from './header/Header';
import { BarraBusqueda } from './barrabusqueda/BarraBuscar';
import { Categorias } from './categorias/Categorias';
import { Home } from './home/Home';
function App() {
  return (
    <div className="App">
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
        <Home/>
      </main>
      <footer>
         Footer
      </footer>
    </div>
  );
}

export default App;
