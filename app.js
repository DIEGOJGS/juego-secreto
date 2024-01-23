/*let titulo = document.querySelector('h1');
titulo.innerHTML ='Juego del número secreto';*/

/*let parrafo = document.querySelector('p');
parrafo.innerHTML ='Indica un número del 1 al 10';*/

//function saludoConNombre(nombre) {
   // console.log("¡Hola, " + nombre + "!");
 // }

  // Llamada a la función con un nombre específico
  //saludoConNombre("Juan");
  let numeroSecreto = 0;
  let intentos = 0;
  let listaNumerosSorteados= [];
  let numeroMaximo = 10;


// Imprime el número secreto en la consola (esto podría ser eliminado en producción)
//console.log(numeroSecreto);
// Función que asigna un texto a un elemento HTML
function asignarTextoElemento(elemento,texto){
      // Selecciona el elemento HTML usando su selector
    let elementoHTML = document.querySelector(elemento);
    // Asigna el texto al contenido del elemento HTML
    elementoHTML.innerHTML =texto;

    // Retorna, no es necesario, pero puede ser útil para claridad
    return;
}
// Función que verifica el intento del usuario
function verificarIntento(){
    // Obtiene el valor ingresado por el usuario y lo convierte a un número entero
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
      //console.log(typeof(numeroDeUsuario));
      // Imprime el número secreto en la consola (esto podría ser eliminado en producción)
      console.log(numeroSecreto);
      console.log(intentos);
      //console.log(typeof(numeroSecreto));
      //console.log(numeroDeUsuario);
      // Compara el número ingresado por el usuario con el número secreto
      if(numeroDeUsuario === numeroSecreto){
        // Este comentario describe la funcionalidad de la línea de código, detallando que se está asignando un mensaje al elemento HTML con etiqueta 'p'. La parte entre las llaves {} utiliza un operador ternario para determinar si la palabra 'vez' o 'veces' debe usarse en base al valor de la variable intentos.
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        // el usuario no acertó.
        // Si no son iguales, verifica si el número secreto es mayor o menor
        if(numeroDeUsuario > numeroSecreto){
        // Si es mayor, llama a la función asignarTextoElemento con un mensaje correspondiente
        asignarTextoElemento('p','El número secreto es menor');
        }else{
        // Si es menor, llama a la función asignarTextoElemento con un mensaje correspondiente
        asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
     

      }
      // Retorna, no es necesario, pero puede ser útil para claridad
      return;
}
function limpiarCaja(){
   document.querySelector('#valorUsuario').value ='';
  
}

// Función que genera un número secreto aleatorio entre 1 y 10
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
    }else{
    
       //Si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }   
    
    
}

function condicionesIniciales(){
    
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos =1;

}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el numero aletorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','True');

}

condicionesIniciales();