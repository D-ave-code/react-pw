
import './estiloHome.css'
import { Carrucel } from './comp-carrucel/carrucel'
import { CardShop } from './comp-card/CardShop'
export function Home(){
    return(
        <div className='Home'>
            <Carrucel/>
            <div className='contan-home-comp'>
            <CardShop/>
            <CardShop/>
            <CardShop/>
            <CardShop/>
            <div className='etiq-home'>
                    <h2> !Cosigelo¡ <br/>
                    Un descuento del 40%</h2>
            </div>
            <CardShop/>
            <div className='nav-home-produc'>
                <ul>
                    <li>Recien Llegado</li>
                    <li>Populares</li>
                    <li>Mejores vendidos</li>
                </ul>
            </div>
            <div className='cont-productos'>

            </div>
            </div>
        </div>
    )
}