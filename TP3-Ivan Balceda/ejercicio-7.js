function mostrarTablaMultiplicar(numero) {
    console.log("Tabla de multiplicar del " + numero + ":");
    for (var i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}

var numeroIngresado = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar del 1 al 10:"));

if (isNaN(numeroIngresado)) {
    console.log("Por favor, ingrese un número válido.");
} else {
    mostrarTablaMultiplicar(numeroIngresado);
}
// Este tambien me costo entenderlo asi que me guie un poco con chatgpt y youtube 😅.