
let nome = prompt("Nome do aluno: ");

let nota1 = prompt("Insira a Nota 1:");
let nota2 = prompt("Insira a Nota 2:");
let nota3 = prompt("Insira a Nota 3:");
let nota4 = prompt("Insira a Nota 4:");

let media = ((parseFloat(nota1) + parseFloat (nota2) + parseFloat (nota3) + parseFloat (nota4))/4);

alert ("O aluno: " + nome + "\n Possui média: " +  media.toFixed(2));