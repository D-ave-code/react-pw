export function UserPage(props){
    console.log(props.info_user.name)
    return(
        <div className="Usuario">
            <h1>Soy:{props.info_user.name}</h1>
            <h2>mi token es:{props.token_a}</h2>
        </div>
        
    )
}