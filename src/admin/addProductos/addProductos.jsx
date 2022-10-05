export function AddProducto(){
    return (
        <div className="AddProducto">
            <h2>Añade un producto</h2>
            <form action="">
                <input type="text" placeholder="nombre" />
                <input type="text" placeholder="precio"/>
                <button type="submit">Añadir</button>
            </form>
        </div>
    )
}