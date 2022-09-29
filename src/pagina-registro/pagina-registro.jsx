import './estiloRegistro.css'
export function Pregistro(){
    return(
        <div className='Registro'>
                <form action="POST" className='form-registro'>
                    <h3>Crea una cuenta</h3>
                    
                <input type="text" placeholder='Nombre' />
                <input type="text" placeholder='Apellido' />
                <input type="text" placeholder='Correo electronico' />
                <input type="text" placeholder='Numero Telefono' />
                <input type="password" placeholder='Contraseña' />
                    <button>Registrarse</button>
                </form>
        </div>
    )
}