import './estiloRegistro.css'
export function Pregistro() {
    return (
        <div className='Registro'>
            <form action="POST" className='form-registro'>
                <h2>Crea una cuenta</h2>
                <input type="text" placeholder='Nombre' />
                <input type="text" placeholder='Apellido' />
                <input type="text" placeholder='Correo electronico' />
                <input type="text" placeholder='Numero Telefono' />
                <input type="password" name='contraseña1' placeholder='Contraseña' />
                <input type="password" name='contraseña2' placeholder='Confirmar contraseña' />
                <button>Registrarse</button>
            </form>
        </div>
    )
}