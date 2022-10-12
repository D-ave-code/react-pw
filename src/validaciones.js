let expPalabras = /[A-zÑñ0-9]/
let expCorreo = /^[a-zA-Z0-9_.+-]+@[A-z-0-9]+\.[A-z-0-9]+/gm
export function validarLetras(texto){
    return expPalabras.test(texto)?true:false
}
export function validarCorreo(texto){
    return expCorreo.test(texto)?true:false
}
