function validarDados() {

    if (document.forms.formulario1.elements.inputNome.value.length < 10) {
        alert("O nome deve ter no mínimo 10 caracteres!");
        return false;
    }

    if (document.forms.formulario1.elements.inputComentario.value.length < 20) {
        alert("O comentário deve ter no mínimo 20 caracteres!");
        return false;
    }

    if (document.getElementById("sim").checked) {
        alert("Volte sempre à esta página!");
    }

    else if (document.getElementById("nao").checked) {
        alert("Que bom que você voltou a visitar esta página!");
    }

    else {
        alert("Escolha uma opção!");
        return false;
    }

    return true;
}