export function AddTipProducto(){
    return(
        <div className="AddTipProducto">
            <h2>Añade un tipo de producto</h2>
            <form action="POST">
                <input type="text" placeholder="Nombre de Tipo" />
                <button type="submit"> Añadir</button>
            </form>
        </div>
    )
}