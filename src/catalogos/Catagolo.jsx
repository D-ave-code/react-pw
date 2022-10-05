import './estiloCatalogo.css'
import { TarjetaProcucto } from '../productos/TarjerjosProductos'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
let titulo
export function Catalogo() {
    let { categoria } = useParams()
    switch (categoria) {
        case 'mujeres':
            titulo = 'Mujeres'
            break;
        case 'hombres':
            titulo = 'Hombres'
            break;
        case 'jovenes':
            titulo = 'Jovenes'
            break;
        case 'ninos':
            titulo = 'Niños'
            break;
        case 'accsesorios':
            titulo = 'Accesorios'
            break;

        default:
            break;
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
                    <TarjetaProcucto />
                    <TarjetaProcucto />
                    <TarjetaProcucto />
                    <TarjetaProcucto />
                </div>
            </div>
        </div>
    )
}