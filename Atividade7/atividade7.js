alert("Escolha:\n1 - Pedra\n2 - Papel\n3 - Tesoura");

let jogador = prompt("Insira a opção:");
jogador = parseInt(jogador);

if (jogador >= 1 && jogador <= 3) {

    let computador = Math.ceil(Math.random() * 3);

    let opJogador = "";
    let opComputador = "";

    if (jogador === 1) opJogador = "Pedra";
    if (jogador === 2) opJogador = "Papel";
    if (jogador === 3) opJogador = "Tesoura";

    if (computador === 1) opComputador = "Pedra";
    if (computador === 2) opComputador = "Papel";
    if (computador === 3) opComputador = "Tesoura";

    let resultado = "";

    if (jogador === computador) {
        resultado = "Empate!";
    } else if (
        (jogador === 1 && computador === 3) ||
        (jogador === 2 && computador === 1) ||
        (jogador === 3 && computador === 2)
    ) {
        resultado = "Você ganhou!";
    } else {
        resultado = "Computador ganhou!";
    }

    alert(
        "Você: " + opJogador + "\n" +
        "Computador: " + opComputador + "\n\n" +
        resultado
    );

} else {
    alert("Opção inválida!");
}