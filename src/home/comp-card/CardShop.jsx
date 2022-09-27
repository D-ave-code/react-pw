import './estiloCard.css'
import imgCard from "../comp-carrucel/imagenes/img1Z.jpg"
export function CardShop(props){
        return(
            <div className='card-shop'>
                <div className='section-1'>
                    <h2>Ropa de mujer</h2>
                    <h3>Obtenun -40%</h3>
                    <div className='btn-com-shop'>Compra ya!</div>
                </div>
                <div className='cont-img-comp-shop'><img src={imgCard} alt="Ropas" /> </div>
            </div>
        )
}