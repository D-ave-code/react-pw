import './estiloIniciarSesion.css'
import { useState } from 'react'
export function PSesion() {
    const [correo, setCorreo] = useState('')
    const [pass, setPass] = useState('')
    const iniciarSesion = (e) => {
        e.preventDefault()
        const datos = {
            email: correo,
            password: pass
        }
        obtenerToken(datos)
    }
    const setMail = (e) => {
        setCorreo(e.target.value)
    }
    const setContra = (e) => {
        setPass(e.target.value)
    }
    return (
        <div className='InicioSesion'>
            <form onSubmit={iniciarSesion} action="" className='formulario-sesion'>
                <h2>Iniciar Sesion</h2>
                <input type="text"  onChange={setMail} placeholder='Correo electronico' />
                <input type="password"  onChange={setContra} placeholder='Contraseña' autoComplete='on' />
                <button type='submit'>Iniciar</button>
            </form>
        </div>
    )
}
const obtenerToken = async (datos) => {
    try {
        const respuesta = await fetch('http://127.0.0.1:8000/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const data = await respuesta.json()
        console.log(data)
    } catch (e) {
        console.log(e)
    }
}
