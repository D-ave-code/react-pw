import './estiloheader.css';
import { NavLink } from 'react-router-dom';
export function Header(){
    return(
        <nav className='navegacion'>
          <div className='btn-inicio'><a href="/">Registrarse</a></div>
          <div className='btn-inicio'><NavLink to="/sesion">Inicio Sesion</NavLink></div>
      </nav>
    )
}