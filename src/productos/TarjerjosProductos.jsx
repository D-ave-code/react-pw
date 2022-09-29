import './estiloProductos.css'
import imgPro from '../home/comp-carrucel/imagenes/img2Z.jpg'
export function TarjetaProcucto(){
    return(
        <div className='producto-card'>
            <div className='cont-img-produc'><img src={imgPro} alt="" /></div>
            <div className='descrip-producto'>
                    <h5>Zapatos- Nike niños Rata davicho</h5>
                    <div className='cont-estrellas'>*******</div>
                    <p>
						Fashion has always been so temporary and uncertain. You can't keep up...
					</p>
                    <div className='cont-precio'>$245.45</div>
                    
            </div>
            <div className='cont-btn-producto'>
                        <div className='btn add-carrito'>Añdir al carrito</div>
                        <div className='btn ver-mas'>ver más</div>
                    </div>
        </div>
    )
}