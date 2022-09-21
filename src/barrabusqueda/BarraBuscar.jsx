import './estiloBarra.css'
export function BarraBusqueda(){
    return(
        <div className='barra-buscar'>
        <input type="text" name="busqueda" placeholder='Buscar'/>
        <button>Buscar</button>
        </div>
    )
}