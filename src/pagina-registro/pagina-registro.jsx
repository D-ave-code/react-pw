import './estiloRegistro.css'
import { useState } from "react"
const urlDate = 'https://unitbycode.com/lav-rea/public/api/auth/register';
export function Pregistro() {
    const[nombre, setNombre] = useState("")
    const[mail, setMail] = useState("")
    const[pass, setPass] = useState("")
    const enviar = (e) =>{
        e.preventDefault()
        const datos = {
            name: nombre,
            email:mail,
            password:pass
        }
        envioDatos(datos)
    }
    const setNom = (e) =>{
        console.log(e.target.value)
        setNombre(e.target.value)
    }
    const setCorreo = (e) =>{
        console.log(e.target.value)
        setMail(e.target.value)
    }
    const setContra = (e) =>{
        console.log(e.target.value)
        setPass(e.target.value)
    }
    return (
        <div className='Registro'>
            <form onSubmit={enviar}  className='form-registro'>
                <h2>Crea una cuenta</h2>
                <input type="text" placeholder='Nombre' value={nombre} onChange={setNom} />
                <input type="text" placeholder='Apellido' />
                <input type="text" placeholder='Correo electronico' value={mail} onChange={setCorreo} />
                <input type="text" placeholder='Numero Telefono' />
                <input type="password" name='contraseña1' value={pass}  onChange={setContra} placeholder='Contraseña' autoComplete='on' />
                <input type="password" name='contraseña2' placeholder='Confirmar contraseña' autoComplete='on' />
                <button type='submit'>Registrarse</button>
            </form>
        </div>
    )
}
const envioDatos = async (datos)=>{
    const envioData = await fetch(urlDate,{
       method:'POST',
       body: JSON.stringify(datos),
       headers:{
           'Content-type':'application/json'
       }
   })
   return await envioData
}