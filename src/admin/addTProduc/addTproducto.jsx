export function AddTipProducto(){
    return(
        <div className="AddTipProducto">
            <form action="POST">
                <input type="text" placeholder="Nombre de Tipo" />
                <button type="submit"> Añadir</button>
            </form>
        </div>
    )
}