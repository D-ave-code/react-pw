import './estiloCategorias.css'
import { useState } from 'react'
var cont = 0 ;
export function Categorias(){
    const [tamaño, setTañamo] = useState({height:'0'})
   
    function desplegar(){
        if(cont == 0){
            setTañamo({transition:'all 0.5s',height:'290px'})
            cont = 1;
        }else{
            setTañamo({transition:'all 0.5s',height:'0'})
            cont = 0;
        }
       
    }
    return(
        <div className="contCategorias">
            <div className="bot-categoria"  onClick={desplegar}>CATEGORIAS</div>
            <ul style={tamaño}>
                <li>Mujeres</li>
                <li>Hombres</li>
                <li>Jovenes</li>
                <li>Niños</li>
                <li>Accesorios</li>
            </ul>
        </div>
    )
}