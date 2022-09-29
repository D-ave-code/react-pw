import './estiloFooter.css'
var bandera = 0;
export function FooterP() {
    
    function desplegarF(e){
    
        if(bandera === 0){
           
            
            bandera=1;
        }else{
            e.target.style.color = 'green'
            bandera=0
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
                    <ul >
                        <li>Especiales</li>
                        <li>Nuevos productos</li>
                        <li>Contactanos</li>
                    </ul>
                </div>
                <div className='item-footer'><h4  id='item2' onClick={desplegarF}>Mi cuenta</h4>
                    <ul>
                        <li>Mis ordenes</li>
                        <li>Mis comprobantes</li>
                        <li>Mi direccion</li>
                        <li>Mi informacion</li>
                    </ul>
                </div>
                <div className='item-footer'><h4  id='item3 ' onClick={desplegarF}>siguenos</h4>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}