// Muestra una alerta con el mensaje "Error".
alert("Error");

// Selecciona todos los elementos <button> en la página y los almacena en la variable 'buttons'.
var buttons = document.querySelectorAll("button");

// Itera a través de cada botón usando forEach.
buttons.forEach(function(button) {
    // Agrega un event listener que se activará cuando se haga clic en un botón.
    button.addEventListener("click", function() {
        // Muestra una alerta con el mensaje "I got clicked" cuando se hace clic en un botón.
        alert("I got clicked");
    });
});
