
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
                    <h1>!Cosigelo¡</h1>
                    <h2>Un descuento del 40%</h2>
            </div>
            <CardShop/>
            
            </div>
        </div>
    )
}