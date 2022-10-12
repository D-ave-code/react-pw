import { Navigate } from "react-router-dom";
import { UserPage } from './userPage/userPage';
import { useEffect, useState } from "react";
import { getToken } from './pagina-sesion/iniciarSesion';
let autentificador;
export function AuthUsers() {
    const[info, setInfo] = useState({})
    const[token, setToken] = useState('')
    const valiDarToken = async (tk) => {
     try {
          const res = await fetch('http://127.0.0.1:8000/api/auth/me',{
               method: 'POST',
               headers: {
                    'Authorization': 'Bearer '+tk
               }
          })
          const data = await res.json()
          setInfo(data)
          setToken(tk)
          autentificador = true;
     } catch (e) {
          console.log(e)
          autentificador = false;
     }
}
    useEffect(()=>{
          valiDarToken(getToken())
    },[])

     if (autentificador) {
          return autentificador ? <UserPage token_a= {token} info_user = {info}/> : <Navigate to="/sesion" />
     }
}

