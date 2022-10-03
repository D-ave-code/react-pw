import './estiloIniciarSesion.css'
import { useState } from 'react'
export function PSesion(){
    const [correo, setCorreo] = useState('')
    const [pass, setPass] = useState('')
    const iniciarSesion = (e) =>{
        e.preventDefault()
        const datos = {
            email:correo,
            password:pass
        }
       obtenerToken(datos)
    }
    const setMail= (e)=>{
        setCorreo(e.target.value)
    }
    const setContra= (e)=>{
        setPass(e.target.value)
    }
    return(
        <div className='InicioSesion'>
              <form onSubmit={iniciarSesion} action="POST" className='formulario-sesion'>
              <h2>Iniciar Sesion</h2>
                    <input type="text" value={correo} onChange={setMail} placeholder='Correo electronico' />
                    <input type="password" value={pass} onChange={setContra} placeholder='Contraseña' autoComplete='on' />
                    <button type='submit'>Iniciar</button>
              </form>
        </div>
    )
}
const obtenerToken = async (datos)=>{
  try{
    const respuesta =  await fetch('https://unitbycode.com/lav-rea/public/api/auth/login',{
        method:'POST',
        body: JSON.stringify(datos),
        headers:{
            'Content-type':'application/json'
        }
})
    const data =  await respuesta.json()
    console.log(data)
  }catch(e){
    console.log(e)
  }
}
