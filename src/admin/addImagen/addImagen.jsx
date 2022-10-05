export function AddImg(){
    return(
        <div className="AddImg">
            <h2>Añadir Imagen</h2>
           <form action="POST" method="post">
                <input type="text" placeholder="ingrese url de la imgen" />
                <button type='submit'>Añadir</button>
           </form>
        </div>
    )
}