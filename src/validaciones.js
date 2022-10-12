let expPalabras = /[A-zÑñ0-9]/
let expCorreo = /^[a-zA-Z0-9_.+-]+@[A-z-0-9]+\.[A-z-0-9]+/gm
let expPass =/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
export function validarLetras(texto){
    return expPalabras.test(texto)?true:false
}
export function validarCorreo(texto){
    return expCorreo.test(texto)?true:false
}
export function validarPass(texto){
    return expPass.test(texto)?true:false
}