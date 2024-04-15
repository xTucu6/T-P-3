function procesarCiudades () {
var ciudades = [];
function mostrarCiudadesEnDocumento(ciudades) {
    document.write("<p>Primera ciudad: " + ciudades[0] + "</p>");
    document.write("<p>Tercera ciudad: " + ciudades[2] + "</p>");
    document.write("<p>Última ciudad: " + ciudades[ciudades.length - 1] + "</p>");
}

while (true) {
    var ciudad = prompt("Ingrese el nombre de una ciudad:");
    if (ciudad === null || ciudad === "") {
        break;
    }
    ciudades.push(ciudad);
}
alert("Arreglo de ciudades: " + ciudades);
console.log("Longitud del arreglo: " + ciudades.length);
mostrarCiudadesEnDocumento(ciudades);
ciudades.push("París");
console.log("Elemento en la segunda posición: " + ciudades[1]);
ciudades.splice(1, 1, 'Barcelona');
console.log("Arreglo con la sustitucion de la segunda posición con 'Barcelona' : " + ciudades);
for (var i = 0; i < ciudades.length; i++) {
    ciudades[i] = ciudades[i].replace(/e/g, "é");
}
console.log("Arreglo con sustitución de 'e' por 'é': " + ciudades);
}
procesarCiudades();