import './estiloAddUsuario.css'
import { ItemUsuario } from './itemUsuario'
import { useState, useEffect } from 'react'
const url = 'http://127.0.0.1:8000/api/v1/admin/users'
export function AddUsuario() {
    const [todos, setTodos] = useState()
    const fetchApi = async () => {
        const response = await fetch(url,{
            method:'GET',
            headers:{
                'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NjUwNzA0NDIsImV4cCI6MTY2NTA3NDA0MiwibmJmIjoxNjY1MDcwNDQyLCJqdGkiOiI3RGQ5dkZLbzlxU2ptdXF0Iiwic3ViIjozLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.ac-bopHvKmk0OpESFHzuyBr0wZnLPYx5P2jVzDxZiI4'
            }
    })
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
                <input type="password" placeholder="Contraseña" autoComplete='on'/>
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
                    {!todos ? 'Cargando...' :
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
