import './estiloIniciarSesion.css'
var bandera= 0;
export function PSesion(){
    function desplegarF(e){
        if(bandera === 0){
            e.target.style.color = 'red'
            console.log(e.target.style.color)
            bandera=1;
        }else{
            e.target.style.color = 'green'
            bandera=0
        }
    }
    return(
        <div className='InicioSesion'>
               <h1 onClick={desplegarF}> AQUI SE INICIARA SESION</h1>
        </div>
    )
}