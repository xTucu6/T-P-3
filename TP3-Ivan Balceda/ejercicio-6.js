function calcularPerimetro(a, b) {
    return 2 * (a + b);
}

var ladoA = parseFloat(prompt("Ingrese la longitud del lado A del rectángulo:"));
var ladoB = parseFloat(prompt("Ingrese la longitud del lado B del rectángulo:"));

if (isNaN(ladoA) || isNaN(ladoB)) {
    console.log("Por favor, ingrese valores numéricos válidos para los lados del rectángulo.");
} else {
    var perimetro = calcularPerimetro(ladoA, ladoB);
    console.log("El perímetro del rectángulo con lados de longitud " + ladoA + " y " + ladoB + " es: " + perimetro);
}
// Me costo este ejercicio por lo que use chatgpt para terminarlo.
