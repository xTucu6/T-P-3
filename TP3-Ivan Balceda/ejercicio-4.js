function determinarParOImpar(numero) {
    if (numero % 2 === 0) {
        return "El número " + numero + " es par.";
    } else {
        return "El número " + numero + " es impar.";
    }
}
var numero = 8;
var resultado = determinarParOImpar(numero);
console.log(resultado);