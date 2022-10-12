import './estiloCatalogo.css'
import { TarjetaProcucto } from '../productos/TarjerjosProductos'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
let titulo
var urlP = 'http://127.0.0.1:8000/api/prod/';
let c =0;
export function Catalogo() {
    const [productos,setProductos] = useState();
    let { categoria } = useParams()
    switch (categoria) {
        case 'mujeres':
            titulo = 'Mujeres'
            c = 2
            break;
        case 'hombres':
            titulo = 'Hombres'
            c = 1
            break;
        case 'jovenes':
            titulo = 'Jovenes'
            c = 4
            break;
        case 'ninos':
            titulo = 'Niños'
            c = 3
            break;
        case 'accsesorios':
            titulo = 'Accesorios'
            c = 4
            break;
        default:
            break;
    }
    useEffect(()=>{
       obtenerProductos(c)
    },[categoria])
    const obtenerProductos= async(c) => {
        try{
            const respuesta = await fetch(urlP+c,{
                method: 'GET',
            })
            const data = await respuesta.json()
            setProductos(data)
        }catch(e){
            console.log(e)
        }
          
    }

    return (
        <div className='Catalogo'>
            <div className='cont-tag'>
            <div className='cont-icon-tag'><Link to='/'>♥</Link></div>
            <div className='cont-cate-tag'>
                {titulo}
            </div>
            </div>
            
            <div className='cate-cont'>
                <form action="">
                    <h5>Categorias</h5>
                    <ul>
                        <li><input type="checkbox" />
                            <label htmlFor="">Casual</label>
                        </li>
                        <li><input type="checkbox" />
                            <label htmlFor="">Deportivos</label>
                        </li>
                        <li><input type="checkbox" />
                            <label htmlFor="">Trajes Formales</label>
                        </li>
                        <li><input type="checkbox" />
                            <label htmlFor="">Trajes de Baño</label>
                        </li>
                    </ul>
                    <h3>Precio</h3>
                    <ul className='precio-input'>
                        <li>
                            <label htmlFor="">Rango: $5 - $300:</label>
                            <input type="text" />
                        </li>
                    </ul>
                </form>
                <div className='cont-info-categoria'>
                    <h2>{titulo}</h2>
                    <p>Fashion has always been so temporary and uncertain. You can not keep up with it. This social
                         phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest 
                         fashion tendencies. Obviously there is nothing wrong about it because fashion satisfies our willingness to
                          be attractive. And also fashion is the detector of prosperity and social rank. So, our natural desire to wear 
                          fashionable clothes has many reasons such as historical, social and others. Therefore being fashionable costs a lot of money. 
                          But nowadays fashion is not such unavailable as it was a couple of centuries ago. We are lucky to have an
                         opportunity to buy qualitative, fashionable and affordable clothes.</p>
                </div>
                <div className='cont-filtros'>
                    Ordenar por:
                    <select name="" id="">
                        <option value="">Mayor Precio a menor precio</option>
                        <option value="">Menor Precio a mayor precio</option>
                    </select>
                </div>
                <div className='cont-productos'>
                    {
                        !productos ? 'Cargando...' :
                        productos.map((producto, index) => {
                            return <TarjetaProcucto key={index}
                                id = {producto.id}
                                nombre={producto.nombre}
                                precio={producto.precio}
                                descripcion={producto.descripcion}
                                id_tipo_productos = {producto.id_tipo_productos}
                                id_marcas = {producto.id_marcas}
                                id_tipo_personas = {producto.id_tipo_personas}
                                imgP = {producto.imagenP}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
