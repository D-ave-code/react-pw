import './estiloheader.css';
import { NavLink } from 'react-router-dom';
export function Header(){
    return(
        <nav className='navegacion'>
          <div className='btn-inicio'><NavLink to="/registrar">Registrarse</NavLink></div>
          <div className='btn-inicio'><NavLink to="/sesion">Inicio Sesion</NavLink></div>
      </nav>
    )
}