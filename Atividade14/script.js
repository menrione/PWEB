function transformarTexto() {

    let texto = document.getElementById("campoTexto");

    if (document.getElementById("maiusculas").checked) {

        texto.value = texto.value.toUpperCase();

    }

    else {

        texto.value = texto.value.toLowerCase();

    }

}
