// Ingresar el nombre de usuario
let username = prompt("Escriba su Nombre o Apodo:");

while (true) {
    // Solicitar al usuario completar la frase
    let fraseRespuesta = prompt("Para ingresar, complete la frase: 'siempre que llovió...'");
    let respuestaCorrecta = ["paro", "paró"];
  
    // Verificar si la respuesta está en la lista de respuestas correctas
    if (respuestaCorrecta.includes(fraseRespuesta.toLowerCase())) {
      alert("¡Bienvenido, " + username + "!");
      break;  // Salir del bucle si la respuesta es correcta
    } else {
      alert("Acceso denegado. Respuesta incorrecta. Intenta de nuevo.");
    }
}

let mensajeAlerta = "" + username + ", como bien sabés, es tu cumpleaños. ¡Felicidades!\n\nY por eso, vas a hacer un asado, pero no sabes ni la cantidad de personas, ni la cantidad de carne que necesitás, ni quienes van a traer bebidas. ¿Te animas a hacer un asado? ¡Vamos!";

// Mostrar la alerta con el mensaje personalizado
alert(mensajeAlerta);

function pedirNombresDeInvitados() {
    let invitados = [];  // Array para almacenar los nombres de los invitados
    let continuar = true;
  
    while (continuar) {
      // Solicitar al usuario el nombre del invitado
      let nombreInvitado = prompt("Ingresa el nombre del invitado (debes poner nombre por nombre de cada invitado que irá a tu cumpleaños):");
  
      // Validar si se ingresó un nombre válido
      if (nombreInvitado) {
        // Agregar el nombre del invitado al array
        invitados.push(nombreInvitado);
      } else {
        // Si no se ingresó un nombre, finalizar el bucle
        continuar = false;
      }
    }
  
    // Mostrar la cantidad total de invitados
    let totalDeInvitados = invitados.length;
    alert("La cantidad total de invitados es: " + totalDeInvitados);
  
    // Determinar la cantidad de carne necesaria según el número de invitados
    if (totalDeInvitados <= 5) {
      alert("Para que nadie se quede con hambre necesitas 3 kilos de carne.");
    } else if (totalDeInvitados <= 10) {
      alert("Para que nadie se quede con hambre necesitas 5 kilos de carne.");
    } else {
      alert("Para que nadie se quede con hambre necesitas comprar un costillar y un vacío enteros.");
    }
  
    // Preguntar al usuario por el tipo de asado
    let tipoDeAsado = prompt("¿Qué tipo de asado prefieres?\n1. Leña\n2. Carbón\n3. Gas");
  
    // Mostrar un mensaje según la elección del usuario
    switch (tipoDeAsado) {
      case "1":
        alert("Has elegido hacer el asado con leña. ¡Buenísima elección para un sabor ahumado!");
        break;
      case "2":
        alert("Has elegido hacer el asado con carbón. ¡Perfecto para un asado tradicional!");
        break;
      case "3":
        alert("Has elegido hacer el asado con gas. ¡Rápido y conveniente!");
        break;
      default:
        alert("Opción no válida. Se asumirá que prefieres hacer el asado con leña.");
    }

        // Mensaje sobre la bebida
    alert("¡Ya casi! Nos falta la bebida.");

    // Preguntar al usuario sobre la bebida
    let opcionBebida = prompt("¿Cómo quieres manejar las bebidas?\n1. Cada invitado colaborará con una bebida\n2. Yo también compraré las bebidas");

    // Lógica para la elección de bebida
    switch (opcionBebida) {
    case "1":
        alert("Me gusta esa colaboración, pero por las dudas, compra 2 o 3 gaseosas.");
        break;
    case "2":
        alert("Si tú también vas a comprar las bebidas, asegúrate de comprar aproximadamente 1 por persona. Mejor que sobre antes que falte.");
        break;
    default:
        alert("Opción no válida. Se asumirá que cada invitado colaborará con una bebida.");
    }

    // Preguntar al usuario sobre el postre
    let opcionPostre = prompt("¡YA CASI! ¿Qué postre vas a tener?\n1. Voy a pedir helado\n2. Voy a hacer una chocotorta\n3. Mi familia me regaló una torta y una vela para que me canten el 'feliz cumpleaños'");

    // Lógica para la elección de postre
    switch (opcionPostre) {
    case "1":
        alert("¡Qué rico! Fácil y sencillo. Asegúrate de comprar la cantidad necesaria. Con 1/8 kg por persona alcanza.");
        break;
    case "2":
        alert("¡Qué rico! Admiro tus ganas de agasajar a tus seres queridos. Asegúrate de que no falte ningún ingrediente: chocolinas, dulce de leche, crema/queso crema y un poco de azúcar.");
        break;
    case "3":
        alert("¡Aw! ¡Qué tierno! Seguro tu familia te ama. Asegúrate de pedir 3 deseos.");
        break;
    default:
        alert("Opción no válida. Se asumirá que tu familia te regaló una torta y una vela para que te canten el 'feliz cumpleaños'.");
    }

    // Mensaje final
    alert("Bueno " + username + ", ya has organizado tu cumpleaños con un éxito total. ¡Ahora, a disfrutar! Te lo repito por las dudas, ¡no olvides los 3 deseos! Que tengas un muy feliz cumpleaños. Tu amigo virtual, Mauro");


    // Devolver el array de invitados si es necesario
    return invitados;
}
  
// Ejemplo de uso de la función
let listaDeInvitados = pedirNombresDeInvitados();
console.log("Lista de invitados:", listaDeInvitados);