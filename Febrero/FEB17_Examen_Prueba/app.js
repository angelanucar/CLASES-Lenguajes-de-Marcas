/**
 * Simulacro de examen DAM.
 * Enunciado:
 * Realiza la validación del formulario.
 * 
 * Parte 1.
 * Crea un evento keyup que realice la validacion del email comprobando los siguientes elementos
 * -  Valor vacío 
 * -  Valor con longitud menor que 15
 * -  Valor con longitud mayor que 3
 * -  Valor correcto.
 * 
 * En los tres primeros, se debe dar un mensaje de error en color rojo y cambiar el color del input a rojo.
 * En el último, se debe cambiar el color del input a verde y en cuanto al mensaje ocultarlo o mostrar mensaje en verde.
 * 
 * Parte 2.
 * Crea un evento keyup que realice la validacion del password comprobando los siguientes elementos
 * -  Valor vacío 
 * -  Valor con longitud menor que 15
 * -  Valor con longitud mayor que 3
 * -  Valor con mayuscula (ver ayuda)
 * -  Valor con numero (ver ayuda)
 * -  Valor con minuscula (ver ayuda)
 * -  Valor correcto.
 * 
 * En los seis primeros, se debe dar un mensaje de error en color rojo y cambiar el color del input a rojo.
 * En el último, se debe cambiar el color del input a verde y en cuanto al mensaje ocultarlo o mostrar mensaje en verde.
 * 
 * Parte 3.
 * Crea un evento click que realice la validacion completa del formulario.
 * - Si el checkbox esta seleccionado y email y password son correctos, mostrar un alert con mensaje de formulario correcto.
 * - Si el checkbox esta deseleccionado o el email o password no son correctos, no mostrar alerta (puesto que hay elementos en rojo).
 * 
 * SECCION DE AYUDA.
 * 1. Para la realicacion de eventos, utilizar addEventListener(evento, funcion);
 * 2. Para cambiar elementos css, utilizar style.CAMBIO.
 * 3. Para la mayuscula, minulscula y numero utilizar la funcion matches (devuelve true o false si coincide o no coincide) de javascript sobre el elemento que se quiere comprobar unido por punto (ELEMENTO.matches(patron)). Tener en cuenta estos patrones:
 * MAYUSCULA ------> /[A-Z]/g
 * MINUSCULA ------> /[a-z]/g
 * NUMERO ---------> /[0-9]/g
 * 4. Para obtener el valor del checkbox en caso de estar o no seleccionado, utilzar ELEMENTO.checked = true|false
 */

document.getElementById('email').addEventListener('keyup', email);
function email(){
    let inputEmail = document.getElementById('email');
    let mensajeEmail = document.getElementById('emailError');

    if(inputEmail.value.length == 0){
        mensajeEmail.innerHTML = "Longitud vacia";
        mensajeEmail.style.color = 'red';
        inputEmail.style.borderColor = 'red';
    }else if(inputEmail.value.length < 3 || inputEmail.value.length > 15 ){
        mensajeEmail.innerHTML = "Longitud incorrecta";
        mensajeEmail.style.color = 'red';
        inputEmail.style.borderColor = 'red';
    }else {
        mensajeEmail.innerHTML = "Longitud correcta";
        mensajeEmail.style.color = 'green';
        inputEmail.style.borderColor = 'green';
        return true;
    }
    return false;
}

document.getElementById('password').addEventListener('keyup', password);
function password(){
    let inputPassword = document.getElementById('password');
    let mensajePassword = document.getElementById('passwordError');

    if(inputPassword.value.length == 0){
        mensajePassword.innerHTML = "Longitud vacia";
        mensajePassword.style.color = 'red';
        inputPassword.style.borderColor = 'red';
    }else if(inputPassword.value.length < 3 || inputPassword.value.length > 15 ){
        mensajePassword.innerHTML = "Longitud incorrecta";
        mensajePassword.style.color = 'red';
        inputPassword.style.borderColor = 'red';
    }
   /* MAYUSCULA ------> /[A-Z]/g
    * MINUSCULA ------> /[a-z]/g
    * NUMERO ---------> /[0-9]/g
    */
    else if(!inputPassword.value.match(/[A-Z]/g)){
        mensajePassword.innerHTML = "Falta una mayuscula";
        mensajePassword.style.color = 'red';
        inputPassword.style.borderColor = 'red';
    }
    else if(!inputPassword.value.match(/[a-z]/g)){
        mensajePassword.innerHTML = "Falta una minuscula";
        mensajePassword.style.color = 'red';
        inputPassword.style.borderColor = 'red';
    }
    else if(!inputPassword.value.match(/[0-9]/g)){
        mensajePassword.innerHTML = "Falta un numero";
        mensajePassword.style.color = 'red';
        inputPassword.style.borderColor = 'red';
    } 
    else {
        mensajePassword.innerHTML = "Password correcto";
        mensajePassword.style.color = 'green';
        inputPassword.style.borderColor = 'green';
        return true;
    }
    return false;
}

document.getElementById('btn').addEventListener('click',enviar);
function enviar(){
    email();
    password();
    let check = document.getElementById('checkbox');
    let mensajeCheckbox = document.getElementById('checkboxError');

    if(check.checked && email() && password()){
        mensajeCheckbox.innerHTML = "Checkbox correcto";
        mensajeCheckbox.style.color = 'green';
        check.style.borderColor = 'green';
        alert('validado');
    }else{
        mensajeCheckbox.innerHTML = "Hay que aceptar las condiciones";
        mensajeCheckbox.style.color = 'red';
        check.style.borderColor = 'red';
    }
}