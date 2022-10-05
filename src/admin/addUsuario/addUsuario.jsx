import './estiloAddUsuario.css'
import { ItemUsuario } from './itemUsuario'
import { useState, useEffect } from 'react'
const url = 'http://127.0.0.1:8000/api/v1/admin/users'
export function AddUsuario() {
    const [todos, setTodos] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON)
    }
    useEffect(() => {
        fetchApi()
    }, [])
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
                    {!todos ? 'Cargando' :
                        todos.map((todo, index) => {
                            return <h1 key={index}><ItemUsuario
                                id={todo.id}
                                nombre={todo.name}
                                correo={todo.email}
                                pass={todo.password}
                            /></h1>

                        })
                    }
                </div>
            </div>
        </div>
    )
}
