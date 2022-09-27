import { useState } from 'react'
import './estiloCarrucel.css'
import img1 from './imagenes/img1Z.jpg'
import img2 from './imagenes/img2Z.jpg'
import img3 from './imagenes/img3Z.jpg'
export function Carrucel(){
    const [mover, setMover] = useState({left:"0%"})
    return(
        <div className='carrucel'>
                <div className='cont-carr' style={mover}>
                    <dir className='contImg'><img src={img1} alt="" /></dir>
                    <dir className='contImg'><img src={img2} alt="" /></dir>
                    <dir className='contImg'><img src={img3} alt="" /></dir>
                </div>
                <div className='cont-circulos'>
                    <div className='circulo' onClick={()=>{setMover({left:"0%"})}}></div>
                    <div className='circulo' onClick={()=>{setMover({left:"-100%"})}}></div>
                    <div className='circulo' onClick={()=>{setMover({left:"-200%"})}}></div>
                </div>
        </div>
    )
}