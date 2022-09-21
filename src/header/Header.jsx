import './estiloheader.css';
export function Header(){
    return(
        <nav className='navegacion'>
          <div className='btn-inicio'><a href="/">Registrarse</a></div>
          <div className='btn-inicio'><a href="/">Iniciar Sesion</a></div>
      </nav>
    )
}