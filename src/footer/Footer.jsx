import './estiloFooter.css'
import { useState } from 'react';
export function FooterP() {
    const [desItem1, setDesItem1] = useState({height: '0' })
    const [desItem2, setDesItem2] = useState({ height: '0' })
    const [desItem3, setDesItem3] = useState({ height: '0' })
    function desplegarF(e) {
        switch (e.target.id) {
            case 'item1':
                if(desItem1.height==='0'){
                    setDesItem1({transition:'all 0.5s',height:'70px'})
                }else{
                    setDesItem1({transition:'all 0.5s',height:'0'})
                }
                break;
            case 'item2':
                if(desItem2.height==='0'){
                    setDesItem2({transition:'all 0.5s',height:'93px'})
                }else{
                    setDesItem2({transition:'all 0.5s',height:'0'})
                }
                break;
            case 'item3':
                if(desItem3.height==='0'){
                    setDesItem3({transition:'all 0.5s',height:'70px'})
                }else{
                    setDesItem3({transition:'all 0.5s',height:'0'})
                }
                break;
            default:
                break;
        }
    }
    return (
        <div className='cont-footer'>
            <div className='cont-title-foot'>
                <h1>Zapatos</h1>
                <h6>© 2022 tienda Zapatos por unitbycode</h6>
            </div>
            <div className='cont-lis-footer'>
                <div className='item-footer' ><h4 id='item1' onClick={desplegarF}>Informacion</h4>
                    <ul style={desItem1}>
                        <li>Especiales</li>
                        <li>Nuevos productos</li>
                        <li>Contactanos</li>
                    </ul>
                </div>
                <div className='item-footer'><h4 id='item2' onClick={desplegarF}>Mi cuenta</h4>
                    <ul style={desItem2}>
                        <li>Mis ordenes</li>
                        <li>Mis comprobantes</li>
                        <li>Mi direccion</li>
                        <li>Mi informacion</li>
                    </ul>
                </div>
                <div className='item-footer'><h4 id='item3' onClick={desplegarF}>siguenos</h4>
                    <ul style={desItem3}>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}