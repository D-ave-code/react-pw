import './estiloAdmin.css'
import { AddCliente } from './addCliente/addCliente'
import { AddImg } from './addImagen/addImagen'
import { useState } from 'react'
export function AdminPage() {
    const [componete, setComponente] = useState(<AddImg/>)

    const setCompo = (e) => {
        switch (e.target.id) {
            case '0':
                setComponente(<AddImg/>)
                break;
            case '1':
                setComponente(<AddImg/>)
                break;
            case '2':
                setComponente(<AddImg/>)
                break;
            case '3':
                setComponente(<AddImg/>)
                break;
            case '4':
                setComponente(<AddImg/>)
                break;
            case '5':
                setComponente(<AddCliente/>)
                break;
            case '6':
                setComponente(<AddImg/>)
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
                    <li id='1'>Tipo productos</li>
                    <li id='2'>marcas</li>
                    <li id='3'>tipo personas</li>
                    <li id='4'>Productos</li>
                    <li id='5' onClick={setCompo}>Clientes</li>
                    <li id='6'>Usuarios</li>
                </ul>
            </div>
            <div className='cont-admin'>
                {componete}
            </div>

        </div>
    )
}