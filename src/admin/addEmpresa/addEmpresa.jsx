export function AddEmpresas(){
    return(
        <div className="AddEmpresa">
            <h2>Añade una Empresa</h2>
            <form action="">
            <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="RUC" />
                <input type="text" placeholder="Telefono"/>
                <input type="text" placeholder="Celular"/>
                <button type="submit">Añadir</button>
            </form>
        </div>
    )
}