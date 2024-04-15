function mostrarInformacionCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
        console.log("La cadena '" + cadena + "' está formada solo por mayúsculas.");
    }
    else if (cadena === cadena.toLowerCase()) {
        console.log("La cadena '" + cadena + "' está formada solo por minúsculas.");
    }
    else {
        console.log("La cadena '" + cadena + "' está formada por una mezcla de mayúsculas y minúsculas.");
    }
}
var cadena1 = "RIVER";
var cadena2 = "boca";
var cadena3 = "Madrid";

mostrarInformacionCadena(cadena1);

mostrarInformacionCadena(cadena2);

mostrarInformacionCadena(cadena3);