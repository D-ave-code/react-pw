import './estiloIniciarSesion.css'

export function PSesion(){
    
    return(
        <div className='InicioSesion'>
              <form action="POST" className='formulario-sesion'>
              <h2>Iniciar Sesion</h2>
                    <input type="text" value={mail} placeholder='Correo electronico' />
                    <input type="password" placeholder='Contraseña' />
                    <button>Iniciar</button>
              </form>
        </div>
    )
}