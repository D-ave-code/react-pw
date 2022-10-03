
export function AddCliente(){
    return(
        <div className="AddClient">
            <form action="POST">
            <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Apellido" />
                <input type="text" placeholder="cedula" />
                <input type="text" placeholder="telefono" />
                <input type="text" placeholder="Correo" />
                <input type="text" placeholder="Direccion" />
                <button type="submit">Añadir </button>
            </form>
        </div>
    )
}