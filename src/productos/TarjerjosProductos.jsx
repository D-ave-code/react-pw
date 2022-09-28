import './estiloProductos.css'
import imgPro from '../home/comp-carrucel/imagenes/img2Z.jpg'
export function TarjetaProcucto(){
    return(
        <div className='producto-card'>
            <div className='cont-img-produc'><img src={imgPro} alt="" /></div>
            <div className='ddescrip-producto'>
                    <h5>Zapatos- Nike niños Rata davicho</h5>
                    <div className='con-etrellas'>*******</div>
                    <p>
						Fashion has always been so temporary and uncertain. You can't keep up...
					</p>
            </div>
        </div>
    )
}