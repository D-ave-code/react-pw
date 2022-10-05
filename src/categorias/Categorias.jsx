import './estiloCategorias.css'
import { Link } from 'react-router-dom';
import { useState } from 'react'
var cont = 0 ;
export function Categorias(){
    const [sizeC, setSizeC] = useState({height:'0'})
   
    function desplegar(){
        if(cont === 0){
            setSizeC({transition:'all 0.5s',height:'290px'})
            cont = 1;
        }else{
            setSizeC({transition:'all 0.5s',height:'0'})
            cont = 0;
        }
       
    }
    return(
        <div className="contCategorias">
            <div className="bot-categoria"  onClick={desplegar}>CATEGORIAS</div>
            <ul onClick={desplegar} style={sizeC}>
                <li><Link to="/Catalogo/mujeres">Mujeres</Link></li>
                <li><Link to="/Catalogo/hombres">Hombres</Link></li>
                <li><Link to="/Catalogo/jovenes">Jovenes</Link></li>
                <li><Link to="/Catalogo/ninos">Niños</Link></li>
                <li><Link to="/Catalogo/accsesorios">Accesiorios</Link></li>
            </ul>
        </div>
    )
}