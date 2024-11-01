function tamaño() {
    var palabra = document.getElementById('data').value;
    var tamaño = palabra.length;
    console.log(tamaño);
    var letra = "";
    if (tamaño % 3 == 0) {
        for (var i = 0; i < tamaño; i++) {
            if (i % 2 == 0) {
                letra += palabra.charAt(i).toLocaleUpperCase();
            }
            else {
                letra += palabra.charAt(i).toLocaleLowerCase();
            }
            console.log(letra);
        }
    }
    else {
        alert("No divisible por 3");
    }
}
