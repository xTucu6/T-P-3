var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
 "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    document.write("<h2>Los meses del año:</h2>");
    document.write("<ul>");
    for (var i = 0; i < 12; i++) {
        document.write("<li>" + meses[i] + "</li>");
    }