import './estiloAdmin.css'
import { AddImg } from './addImagen/addImagen'
import { AddTipProducto } from './addTProduc/addTproducto'
import { AddEmpresas } from './addEmpresa/addEmpresa'
import { AddTipoPersona } from './addTPersonas/addPersona'
import { AddProducto } from './addProductos/addProductos'
import { AddMarcas } from './addMarcas/addMarcas'
import { AddUsuario } from './addUsuario/addUsuario'
import { useState } from 'react'
export function AdminPage() {
    const [componete, setComponente] = useState(<AddImg/>)

    const setCompo = (e) => {
        switch (e.target.id) {
            case '0':
                setComponente(<AddImg/>)
                break;
            case '1':
                setComponente(<AddTipProducto/>)
                break;
            case '2':
                setComponente(<AddMarcas/>)
                break;
            case '3':
                setComponente(<AddTipoPersona/>)
                break;
            case '4':
                setComponente(<AddProducto/>)
                break;
            case '5':
                setComponente(<AddEmpresas/>)
                break;
            case '6':
                setComponente(<AddUsuario/>)
                break;
            default:
                break;
        }
    }
    return (
        <div className="Admin">
            <h1>Soy admin xd</h1>

            <div className="cont-nav-admin">
                <ul>
                    <li id='0' onClick={setCompo}>Imagenes</li>
                    <li id='1' onClick={setCompo}>Tipo productos</li>
                    <li id='2' onClick={setCompo}>marcas</li>
                    <li id='3' onClick={setCompo}>tipo personas</li>
                    <li id='4' onClick={setCompo}>Productos</li>
                    <li id='5' onClick={setCompo}>Empresa</li>
                    <li id='6' onClick={setCompo}>Usuarios</li>
                </ul>
            </div>
            <div className='cont-admin'>
                {componete}
            </div>

        </div>
    )
}