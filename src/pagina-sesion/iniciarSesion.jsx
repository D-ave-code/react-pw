import './estiloIniciarSesion.css'
import { validarCorreo} from '../validaciones'
import { useState } from 'react'
let toke_acces = '';
export function PSesion() {
    const [correo, setCorreo] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState()
    
    const iniciarSesion = (e) => {
        e.preventDefault()
        const datos = {
            email: correo,
            password: pass
        }
        
        if(validarCorreo(correo)){
          
            obtenerToken(datos)
        }else{
            
            setError(<div className='mensaje-error'>El correo electrónico no es correcto que has introducido no está conectado a una cuenta o esta mal escrito.</div>)
        }
       
       
    }
    const setMail = (e) => {
        setCorreo(e.target.value)
    }
    const setContra = (e) => {
        setPass(e.target.value)
    }
    const obtenerToken = async (datos) => {
        try{
            const respuesta = await fetch('http://127.0.0.1:8000/api/auth/login', {
                method: 'POST',
                body: JSON.stringify(datos),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const data = await respuesta.json()
            toke_acces = data.access_token;
            
        }catch(e){
            console.log(e)
        }
          
    }
    return (
        <div className='InicioSesion'>
            
            <form onSubmit={iniciarSesion}  method='POST' className='formulario-sesion'>
                <input type="text"  onChange={setMail} placeholder='Correo electronico' />
                <input type="password"  onChange={setContra} placeholder='Contraseña' autoComplete='on' />
                <button type='submit'> Iniciar</button>
                {error}
            </form>
        </div>
    )
}

export  function getToken(){
    return toke_acces
}
