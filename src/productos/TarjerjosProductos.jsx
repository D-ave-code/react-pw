import './estiloProductos.css'
export function TarjetaProcucto(props){
    return(
        <div className='producto-card'>
            <div className='cont-img-produc'><img src={props.imgP} alt="" /></div>
            <div className='descrip-producto'>
                    <h5>{props.nombre}</h5>
                    <div className='cont-estrellas'>*******</div>
                    <p>
						{props.descripcion}
					</p>
                    <div className='cont-precio'>{props.id} ${props.precio}</div>
                    
            </div>
            <div className='cont-btn-producto'>
                        <div className='btn add-carrito'>Añdir al carrito</div>
                        <div className='btn ver-mas'>ver más</div>
                    </div>
        </div>
    )
}