// Obtener la cantidad de botones con la clase "drum" en el documento
var numeroBotones = document.querySelectorAll(".drum").length;

// Agregar un event listener de clic a cada botón
for (var i = 0; i < numeroBotones; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // Obtener el contenido interno del botón que se hizo clic
        var botonInnerHTML = this.innerHTML;

        // Llamar a la función sonido con el contenido interno como argumento
        sonido(botonInnerHTML);

        // Llamar a la función botonAnimacion con el contenido interno como argumento
        botonAnimacion(botonInnerHTML);
    });
}

// Agregar un event listener de teclado al documento
document.addEventListener("keydown", function (event) {
    // Obtener la tecla presionada en el teclado
    sonido(event.key);

    // Llamar a la función botonAnimacion con la tecla presionada como argumento
    botonAnimacion(event.key);
});

// Función para reproducir sonidos basados en la tecla o botón activado
function sonido(key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;

        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        default:
            console.log(key); // Si no coincide con ningún caso, imprimir en la consola la tecla presionada
    }
}


/* 
- this:this se utiliza en el contexto de los event listeners (escuchadores de eventos) dentro del bucle for para hacer referencia al elemento HTML que desencadenó el evento de clic. Cuando se hace clic en un botón con la clase "drum", this se refiere al botón que se hizo clic. En este caso, this se utiliza para obtener el contenido interno del botón y pasarlo a la función sonido para determinar qué sonido debe reproducirse.
- event: event se utiliza en el contexto del event listener que está esperando eventos de teclado en el documento (document). Cuando se presiona una tecla en el teclado, se genera un objeto de evento que contiene información sobre el evento, como la tecla que se presionó. El parámetro event se utiliza para acceder a esta información y se pasa a la función sonido para determinar qué sonido debe reproducirse.
- switch:El bloque switch se utiliza para determinar qué sonido debe reproducirse en función del valor de key, que representa la tecla presionada en el teclado o el contenido interno del botón que se hizo clic. Cada caso dentro del switch verifica el valor de key y ejecuta el código correspondiente para reproducir el sonido asociado a esa tecla o botón. Si key no coincide con ninguno de los casos, se ejecuta el bloque default y se imprime un mensaje en la consola.
*/
