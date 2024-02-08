// Tenemos varias funciones a disposicion en nuestro programa.
// Debemos reutilizarlas y acomodar nuestro juego para que el mismo sea al mejor de 3 partidas.
// Esto significa que el primero que gane 2 partidas va ser el ganador. Con lo cual pueden repetirse varias rondas hasta que esto suceda.

// Listemos las funciones para recordarlo mejor
// FUNCION 1: iniciarJuego()

function iniciarJuego() {
    let ok = false;
    let soloLetras
    // suludamos al usuario
    alert("Bienvenido al piedra papel o tijera de Frontend II.");

    do {
        let nombre = prompt("Ingese su nombre por favor:").toUpperCase().trim()
        soloLetras = /^[a-zA-Z]+$/
        // guardamos en una variable en nombre ingresado
        // if (!isNaN(nombre) || nombre.length <= 3) {
        if (nombre.length < 3 || !soloLetras.test(nombre)) {

            alert("Tu nombre debe tener mas de 3 caracteres y no se permiten numeros");
            nombre = prompt("Ingese su nombre por favor:").toUpperCase()
            ok = true
        } else {
            ok = false
            alert("Gracias por jugar " + nombre + ". ¡Mucha suerte!");
            // mostramos los datos por consola
            console.log("----------------------------");
            console.log("El jugador es:")
            console.log(nombre);
            console.log("----------------------------");
            return nombre;
        }
    } while (ok == true)
}

const nombreDelJugador = iniciarJuego()


// -> Es la que se encarga de recopilar el nombre del jugador y saludarlo.
// FUNCION 2: pedirJugada()

function pedirJugada() {
    // Inicializamos con la varialbe eleccion en 0
    let eleccion = 0
  
  
    do {
      // Pedir que elija una opcion valida
      // convertir el texto que nos llega a un entero
      // reemplazar el valor guardado en la variable
      eleccion = parseInt(prompt("Ingrese para jugar 1(🗿 Piedra) 2(🧻 Papel) o 3(✂️Tijera)"))
      
      } while (isNaN(eleccion) || eleccion < 1 || eleccion > 3);
  
      // para mostrar por consola
      console.log("-----------------");
      console.log("La elección del jugador es:");
      console.log(eleccion);
      console.log("-----------------");
  
      return eleccion
  }
  // let jugadaUsuario = pedirJugada() // Probamos la jugada
  // console.log(jugadaUsuario);
// -> Esta se encarga de pedirle una eleccion al usuario hasta que ingrese un número válido.
// FUNCION 3: jugadaRandom()

function jugadaRandom() {
    // Math.random()👉🏻 https://www.w3schools.com/js/js_random.asp
    min = 1
    max = 4
    let numero = parseInt(Math.random() * (max - min) + min)
    // let numero = Math.floor(Math.random() * (max - min) + min)
    
    // let numero = Math.round(Math.random() * (max - min) + min)
    // let numero = Math.ceil(Math.random() * (max - min) + min)

    // para mostrar por consola
    console.log("-----------------");
    console.log("La elección la COMPUTADORA es:");
    console.log(numero);
    console.log("-----------------");

    // RETORNO EL NUERO DE LA ELECCION ALEATORIA
    return numero
}

// let jugadaPC = jugadaRandom() // Probamos la jugada

// -> Utiliza el objeto Math para generar un numero aleatorio entre 1 y 3
// FUNCION 4: compararJugadas()
// -> Se encarga de comparar ambas elecciones y definir cómo le fue al usuario

function compararJugadas() {
    const RESULTADOS_POSIBLES = ['¡Genial, ganaste!', 'Esto fue un empate.', 'Una lástima, perdiste.'];
    const OPCIONES = ['piedra', 'papel', 'tijera'];

    const ELECCION_JUGADOR = pedirJugada()
    const JUGADA_PC = jugadaRandom()

    // EL VALOR POR DEFECTO DE LA JUGADA ES GANASTE!
    let resultadoRonda = RESULTADOS_POSIBLES[0]
    
    // Cambiar el resultado de la ronda ... dependiendo si empata o pierde
    if (ELECCION_JUGADOR  == JUGADA_PC) { // Caso de empate 
        resultadoRonda = RESULTADOS_POSIBLES[1]
    } else if ( // Caso de perder la partida
        (ELECCION_JUGADOR == 1 && JUGADA_PC == 2) || // Si yo saco piedra y la pc papel pierdo
        (ELECCION_JUGADOR == 2 && JUGADA_PC == 3) || // Si yo saco papel y la pc tijera pierdo
        (ELECCION_JUGADOR == 3 && JUGADA_PC == 1) // Si yo saco tijera y la pc piedra pierdo
    ) {
        resultadoRonda = RESULTADOS_POSIBLES[2]
    }

    return `La computadora eligió: ${OPCIONES[JUGADA_PC - 1]} \nElección Jugador: ${OPCIONES[ELECCION_JUGADOR - 1]} \n ${resultadoRonda}`
}
// const resultadoDePartida = compararJugadas()
// console.log(resultadoDePartida);



/* ------------------------------ 👇Comenzamos ------------------------------ */
// Primero debemos limpiar los scripts anteriores y dejar solo las funciones, quitamos las variables y las empezamos a declarar solo en este script

let marcador = {
    usuario: 0,
    computadora: 0,
    empate: 0
}

while(marcador.usuario <2 && marcador.computadora < 2){
    const RESULTADO_PARTIDA = compararJugadas()
    alert(RESULTADO_PARTIDA)
    console.log(RESULTADO_PARTIDA)

    if(RESULTADO_PARTIDA.includes("ganaste")){
        marcador.usuario++
    } else if (RESULTADO_PARTIDA.includes("perdiste")){
        marcador.computadora++
    }
    console.log(marcador);
    console.log(`Partidas jugadas: ${marcador.usuario + marcador.computadora + marcador.empate}`);
}

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar el objeto puntajes para poder contabilizar los empates tambien.
// 2- Modificar el bucle para poder sumar tambien la cantidad de empates.
// 3- Mostrar en cada partida el resultado al usuario.
// 4- Mostrar finalmente la cantidad de partidas jugadas y que sepa cuantas ganó, perdió o empató durante el juego.