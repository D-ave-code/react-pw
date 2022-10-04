export function AddImg(){
    return(
        <div className="AddImg">
           <form action="POST" method="post">
                <input type="text" placeholder="ingrese url de la imgen" />
           </form>
        </div>
    )
}