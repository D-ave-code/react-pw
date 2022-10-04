import './estiloAddUsuario.css'
import { ItemUsuario } from './itemUsuario'
export function AddUsuario() {
    return (
        <div className="AddUsuario">
            <form className='formularioAddUsuario' action="">
                <h2>Añadir Usuario</h2>
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Correo" />
                <input type="password" placeholder="Contraseña" />
                <button>Añadir</button>
            </form>
            <div className='cont-lis-usuarios'>
                <ul className='categoria-usuarios'>
                    <li>Id</li>
                    <li>Nombre</li>
                    <li>Correo</li>
                    <li>Contraseña</li>
                </ul>
                <div className='usuario-list'>
                    <ItemUsuario/>
                </div>
            </div>
        </div>
    )
}