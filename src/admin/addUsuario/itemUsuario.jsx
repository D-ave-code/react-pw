import './estiloItem.css'
export function ItemUsuario(props){
    return(
        <div className="Item">
            <div className="cont-id">{props.id}</div>
            <div className="cont-nombre">{props.nombre}</div>
            <div className="cont-correo">{props.correo}</div>
            <div className="cont-pass">**********</div>
        </div>
    )
}